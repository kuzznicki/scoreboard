import { Team, Game } from '@/types';
import { createGame } from '@/utils'; 
import gamesReducer, { finishGame, startGame, updateScore } from '@/reducers/gamesReducer';

test('START_GAME action should add the game to the state', () => {
    const initialState: Game[] = [];
    const game = createGame(Team.Poland, Team.Germany);
    const state = gamesReducer(initialState, startGame(game));
    
    expect(state[0]).toEqual(game);
    expect(state.length).toEqual(1);
});

test('UPDATE_SCORE action should update the game in the state', () => {
    const game0 = createGame(Team.Italy, Team.Spain);
    const game1 = createGame(Team.Poland, Team.Germany);
    const game2 = createGame(Team.Argentina, Team.France);
    const initialState: Game[] = [game0, game1, game2];

    const state = gamesReducer(initialState, updateScore(game1.id, 7, 0));
    
    expect(state.length).toEqual(3);
    expect(state[0].homeScore).toEqual(0);
    expect(state[2].homeScore).toEqual(0);
    
    expect(state[1].homeScore).toEqual(7);
    expect(state[1].awayScore).toEqual(0);
    expect(state[1].homeTeam).toEqual(game1.homeTeam);
    expect(state[1].awayTeam).toEqual(game1.awayTeam);
});

test('FINISH_GAME action should remove the game from the state', () => {
    const game0 = createGame(Team.Italy, Team.Spain);
    const game1 = createGame(Team.Poland, Team.Germany);
    const game2 = createGame(Team.Argentina, Team.France);
    const initialState: Game[] = [game0, game1, game2];

    const state = gamesReducer(initialState, finishGame(game1.id));
    
    expect(state.length).toEqual(2);
    expect(state[0]).toEqual(game0);
    expect(state[1]).toEqual(game2);
});