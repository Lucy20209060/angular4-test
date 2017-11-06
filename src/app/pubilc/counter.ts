import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface Action {
  type: string;
  payload?: any;
}

export function counterReducer(state: number = 0, action: Action) {
	console.log(action)
	switch (action.type) {
		case INCREMENT:
			return state + action.payload;

		case DECREMENT:
			return state - 1;

		case RESET:
			return 0;

		default:
			return state;
	}
}