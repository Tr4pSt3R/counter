import * as types from '../constants/action_types';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });
export const incrementIfOdd = () => ({ type: types.INCREMENT_IF_ODD });