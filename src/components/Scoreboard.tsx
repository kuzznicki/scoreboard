import { Button, Card } from 'react-bootstrap';
import { Game } from "@/types";
import '@/styles/components/Scoreboard.scss'

type Props = {
    games: Game[];
};

export default function Scoreboard({ games }: Props) {
    return (
        <Card className="scoreboard">
            <Card.Header className="header">
                <span className="title">Scoreboard</span>
                <Button variant="primary" onClick={() => {}}>
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
    );
}