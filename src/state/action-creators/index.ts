/** @format */

import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const depositMoney = (ammount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionTypes.DEPOSIT,
			payload: ammount,
		});
	};
};

export const withdrawMoney = (ammount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionTypes.WITHDRAW,
			payload: ammount,
		});
	};
};

export const bankrupt = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionTypes.BANKRUPT,
		});
	};
};
