import * as types from '../constants/action_types';

const initialState = [{ count: 0 }];

export default (state = initialState, action) => {
  let count = state[state.length - 1].count;

  switch(action.type) {
    case types.INCREMENT:
      return [...state, {count: ++count}];
    case types.DECREMENT:
      return [...state, {count: --count}];
    default:
      return state;
  }
};
