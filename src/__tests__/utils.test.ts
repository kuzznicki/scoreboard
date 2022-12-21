import { Team } from "@/types";
import { createGame, isTeamPlaying, stringToTeam } from "@/utils";

test('stringToTeam() - should return team if string is correct', () => {
    const team = stringToTeam(Team.Poland as string);
    expect(team).toEqual(Team.Poland);
});

test('stringToTeam() - should return null if string is incorrect', () => {
    const team = stringToTeam('incorrect');
    expect(team).toEqual(null);
});

test('createGame() - should return game with correct score', () => {
    const game = createGame(Team.Poland, Team.Germany);
    expect(game).toEqual({
        id: expect.any(String),
        homeTeam: Team.Poland,
        awayTeam: Team.Germany,
        homeScore: 0,
        awayScore: 0,
    });
});

test('isTeamPlaying() - should return true if team is playing', () => {
    const games = [createGame(Team.Poland, Team.Germany)];
    const isPlaying = isTeamPlaying(games, Team.Poland);
    expect(isPlaying).toEqual(true);
});

test('isTeamPlaying() - should return false if team is not playing', () => {
    const games = [createGame(Team.Poland, Team.Germany)];
    const isPlaying = isTeamPlaying(games, Team.Italy);
    expect(isPlaying).toEqual(false);
});