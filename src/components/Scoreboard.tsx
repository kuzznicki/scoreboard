import { Fragment, useState, Dispatch } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Game, Team } from '@/types';
import StartGameModal from '@/components/StartGameModal';
import { Action, startGame } from '@/reducers/gamesReducer';
import '@/styles/components/Scoreboard.scss'
import { createGame } from '@/utils';

type Props = {
    games: Game[];
    dispatch: Dispatch<Action>;
};

export default function Scoreboard({ games, dispatch }: Props) {
    const [showStartGameModal, setShowStartGameModal] = useState(false);

    function handleGameStart(homeTeam: Team, awayTeam: Team) {
        const game = createGame(homeTeam, awayTeam);
        dispatch(startGame(game));
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
                    <ul className="games">
                        {games.map((game) => (
                            <li key={game.id}>
                                {game.homeTeam} {game.homeScore} - {game.awayScore} {game.awayTeam}
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>

            <StartGameModal
                games={games}
                show={showStartGameModal} 
                onHide={() => setShowStartGameModal(false)}
                onGameStart={handleGameStart}
            />
        </Fragment>
    );
}