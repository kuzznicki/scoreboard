import { Game } from '@/types';

enum ActionType {
    START_GAME = 'START_GAME',
    UPDATE_SCORE = 'UPDATE_SCORE',
    FINISH_GAME = 'FINISH_GAME',
}

type StartAction = { type: ActionType.START_GAME, payload: Game };
type FinishAction = { type: ActionType.FINISH_GAME, payload: { id: string } };
type UpdateAction = { 
    type: ActionType.UPDATE_SCORE, 
    payload: { 
        id: string, 
        homeScore: number, 
        awayScore: number
    }
};

export type Action = StartAction | FinishAction | UpdateAction;

export default function reducer(state: Game[], action: Action) {
    switch (action.type) {
        case ActionType.START_GAME:
            return [...state, action.payload];
        case ActionType.FINISH_GAME:
            return state.filter(game => game.id !== action.payload.id);
        case ActionType.UPDATE_SCORE:
            return state.map(game => {
                return game.id !== action.payload.id ? game : {
                    ...game,
                    homeScore: action.payload.homeScore,
                    awayScore: action.payload.awayScore
                };
            });
        default:
            return state;
    }
}

export const startGame = (game: Game): Action => ({ type: ActionType.START_GAME, payload: game });
export const finishGame = (id: string): Action => ({ type: ActionType.FINISH_GAME, payload: { id } });
export const updateScore = (id: string, homeScore: number, awayScore: number): Action => {
    return { 
        type: ActionType.UPDATE_SCORE, 
        payload: { id, homeScore, awayScore }
    };
};