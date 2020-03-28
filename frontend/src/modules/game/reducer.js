import { handleActions } from 'redux-actions';
import * as Constants from './constants';

const initialState = {
	isLoading: false,
};

export default handleActions(
	{
		[Constants.GAME_PIN_REQUEST]: (state) => ({
			...state,
			isLoading: true,
		}),
		[Constants.GAME_PIN_SUCCESS]: (state) => ({
			...state,
			isLoading: false,
		}),
		[Constants.GAME_PIN_ERROR]: (state) => ({
			...state,
			isLoading: false,
		}),
	},
	initialState
);
