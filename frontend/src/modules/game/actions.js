import { createAction } from 'redux-actions';
import * as Constants from './constants';

export const gamePinRequest = createAction(Constants.GAME_PIN_REQUEST);
export const gamePinSuccess = createAction(Constants.GAME_PIN_SUCCESS);
export const gamePinError = createAction(Constants.GAME_PIN_ERROR);
