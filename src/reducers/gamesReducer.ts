import { Game } from '@/types';

enum ActionType {
    START_GAME = 'START_GAME'
}

export type Action = {
    type: ActionType,
    payload: Game,
}

export default function reducer(state: Game[], action: Action) {
    switch (action.type) {
        case ActionType.START_GAME:
            return [...state, action.payload];
        default:
            return state;
    }
}

// action creators
export const startGame = (game: Game) => ({ type: ActionType.START_GAME, payload: game });