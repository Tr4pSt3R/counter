import * as types from './action_types';

describe('Action Types', () => {
  it('should return correct type for increment action', () => {
    expect(types.INCREMENT).toEqual('INCREMENT');
  });

  it('should return correct type for decrement action', () => {
    expect(types.DECREMENT).toEqual('DECREMENT');
  });
});