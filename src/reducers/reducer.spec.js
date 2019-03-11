  import reducer from './reducer';
import * as types from '../constants/action_types';

/**
 * REDUCERS
 *   A reducer should return the new state after
 *   applying the action to the previous state.
 */
describe('Reducer', () => {
  describe('counter', () => {
    it('should have an initial count of 0', () => {
      expect(reducer(undefined, { type: '' } )).toEqual(
        [{ count: 0 }]
      );
    });

    it('should increment count by 1', () => {
      let initialState = [{count: 4}];

      expect(reducer(initialState, { type: types.INCREMENT })).toEqual(
        [
          {count: 4},
          {count: 5},
        ]
      );
    });

    it('should decrement count by 1', function () {
      let initialState = [{count: 4}];

      expect(reducer(initialState, { type: 'DECREMENT' })).toEqual(
        [
          {count: 4},
          {count: 3},
        ]
      );
    });
  });
});