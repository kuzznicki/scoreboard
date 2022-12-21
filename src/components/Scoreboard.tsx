import { Fragment, useState, Dispatch } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Game, Team } from '@/types';
import { Action, startGame, updateScore, finishGame } from '@/reducers/gamesReducer';
import { StartGameModal, GameEntry, UpdateGameModal } from '@/components';
import { createGame } from '@/utils';
import '@/styles/components/Scoreboard.scss';

type Props = {
    games: Game[];
    dispatch: Dispatch<Action>;
};

export default function Scoreboard({ games, dispatch }: Props) {
    const [showStartGameModal, setShowStartGameModal] = useState(false);
    const [gameToUpdate, setGameToUpdate] = useState<Game | null>(null);
    
    const sortedGames = [...games].sort((a, b) => {
        const scoreDiff = (b.homeScore + b.awayScore) - (a.homeScore + a.awayScore);
        if (scoreDiff !== 0) return scoreDiff;

        return b.startedAt - a.startedAt;
    });

    function handleGameStart(homeTeam: Team, awayTeam: Team) {
        const game = createGame(homeTeam, awayTeam);
        dispatch(startGame(game));
    }

    function handleScoreUpdate(id: string, homeScore: number, awayScore: number) {
        dispatch(updateScore(id, homeScore, awayScore));
    }

    function handleGameFinish() {
        if (!gameToUpdate) return;
        dispatch(finishGame(gameToUpdate.id));
        setGameToUpdate(null);
    }

    return (
        <Fragment>
            <Card className="scoreboard">
                <Card.Header className="header">
                    <span className="title">Scoreboard</span>
                    <Button variant="primary" onClick={() => setShowStartGameModal(true)}>
                        New game
                    </Button>
                </Card.Header>

                <Card.Body>
                    {sortedGames.length === 0 ? (
                        <div className="empty">No games yet</div>
                    ) : (
                        <ul className="games">
                            {sortedGames.map((game) => (
                                <li key={game.id}>
                                    <GameEntry game={game} onClick={() => setGameToUpdate(game)}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </Card.Body>

                <Card.Footer className="text-muted">
                    Click on game to finish it or update the score
                </Card.Footer>
            </Card>

            {showStartGameModal && <StartGameModal
                games={games}
                onHide={() => setShowStartGameModal(false)}
                onGameStart={handleGameStart}
            />}

            {gameToUpdate && <UpdateGameModal
                game={gameToUpdate}
                onHide={() => setGameToUpdate(null)}
                onUpdate={(id, homeScore, awayScore) => handleScoreUpdate(id, homeScore, awayScore)}
                onFinish={() => handleGameFinish()}
            />}
        </Fragment>
    );
}