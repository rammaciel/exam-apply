import { takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as Actions from './actions';

function* gamePinRequest(action) {
	const {
		payload: { pin },
	} = yield action;
	if (pin !== '541082') {
		yield put(Actions.gamePinError());
		return toast.error('PIN inválido');
	}
	return yield put(Actions.gamePinSuccess());
}

export default all([takeLatest(Actions.gamePinRequest, gamePinRequest)]);
