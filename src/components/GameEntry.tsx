import { Game } from "@/types";
import '@/styles/components/GameEntry.scss';

type Props = {
    game: Game;
    onClick: (game: Game) => void;
};

export default function GameEntry({ game, onClick }: Props) {
    return (
        <button className="game-entry" onClick={() => onClick(game)}>
            <div className="home-team">{game.homeTeam}</div>
            <div className="score">{game.homeScore} - {game.awayScore}</div>
            <div className="away-team">{game.awayTeam}</div>
        </button>
    );
}