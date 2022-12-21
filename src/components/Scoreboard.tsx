import { Fragment, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Game, Team } from "@/types";
import StartGameModal from '@/components/StartGameModal';
import '@/styles/components/Scoreboard.scss'

type Props = {
    games: Game[];
};

export default function Scoreboard({ games }: Props) {
    const [showStartGameModal, setShowStartGameModal] = useState(false);

    function handleGameStart(homeTeam: Team, awayTeam: Team) {
        console.log(homeTeam, awayTeam);
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