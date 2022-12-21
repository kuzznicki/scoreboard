import { v4 as uuid } from "uuid";
import { Game, Team } from "./types";

export function stringToTeam(teamString: string): Team | null {
    return Object.values(Team).find((team) => team === teamString) || null;
}

export function createGame(homeTeam: Team, awayTeam: Team): Game {
    return { id: uuid(), homeTeam, awayTeam, homeScore: 0, awayScore: 0 };
}

export function isTeamPlaying(games: Game[], team: Team): boolean {
    return games.some((game) => game.homeTeam === team || game.awayTeam === team);
}