import { Team, Game } from '@/types';
import { createGame } from '@/utils'; 
import gamesReducer, { startGame } from '@/reducers/gamesReducer';

test('START_GAME action should add the game to the state', () => {
    const initialState: Game[] = [];
    const game = createGame(Team.Poland, Team.Germany);
    const state = gamesReducer(initialState, startGame(game));
    
    expect(state[0]).toEqual(game);
    expect(state.length).toEqual(1);
});
