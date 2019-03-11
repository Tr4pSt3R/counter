import * as actions from './counter_action.js';

describe('Actions', () => {
  describe('counter', () => {
    it('should create an action to increment', () => {
      expect(actions.increment()).toEqual(
        {
          type: 'INCREMENT'
        }
      );
    });

    it('should create an action to decrement', () => {
      expect(actions.decrement()).toEqual(
       {
         type: 'DECREMENT'
       }
     );
    });
  });
});
