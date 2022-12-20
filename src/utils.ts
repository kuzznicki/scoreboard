import { Team } from "./types";

export function stringToTeam(teamString: string): Team | null {
    return Object.values(Team).find((team) => team === teamString) || null;
}
