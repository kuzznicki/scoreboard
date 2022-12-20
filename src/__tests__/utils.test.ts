import { Team } from "@/types";
import { stringToTeam } from "@/utils";

test('stringToTeam() - should return team if string is correct', () => {
    const team = stringToTeam(Team.Poland as string);
    expect(team).toEqual(Team.Poland);
});

test('stringToTeam() - should return null if string is incorrect', () => {
    const team = stringToTeam('incorrect');
    expect(team).toEqual(null);
});