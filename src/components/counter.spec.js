import React from 'react';
import Counter from './counter';
import { shallow, configure } from 'enzyme';
import * as settings from '../constants/defaults';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

function setup(initialCount) {
  let initialState = [{count: initialCount}];

  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  const component = shallow(<Counter
                              value={initialState}
                              onIncrement={actions.onIncrement}
                              onDecrement={actions.onDecrement}
                           />);
  const incrementBtn = component.find('#btn__increment');
  const decrementBtn = component.find('#btn__decrement');
  const incrementIfOddBtn = component.find('button#btn__increment_if_odd');
  const incrementAsyncBtn = component.find('button#btn__increment_async');

  return {
    component,
    actions,
    incrementBtn,
    decrementBtn,
    incrementIfOddBtn,
    incrementAsyncBtn
  }
}

describe('Component', () => {
  describe('.counter', () => {
    it('should display count', () => {
      const { component } = setup(0);

      expect(component.find('.CounterApp').text()).toMatch(
        'Clicked: 0 times'
      );
    });

    it('first button should call onIncrement', () => {
      const { actions, incrementBtn } = setup(0);

      incrementBtn.simulate('click');

      expect(actions.onIncrement).toHaveBeenCalled();
    });

    it('second button should call onDecrement', () => {
      const { actions, decrementBtn } = setup(0);

      decrementBtn.simulate('click');

      expect(actions.onDecrement).toBeCalled();
    });

    it('should call increment function if current count is odd', () => {
      const { actions, incrementIfOddBtn } = setup(3);

      incrementIfOddBtn.simulate('click');

      expect(actions.onIncrement).toBeCalled();
    });

    it('should not call increment function if current count is even', () => {
      const { actions, incrementIfOddBtn } = setup(4);

      incrementIfOddBtn.simulate('click');

      expect(actions.onIncrement).not.toBeCalled();
    });

    it('should increment when count is negative but odd', () => {
      const { actions, incrementIfOddBtn } = setup(-3);
      incrementIfOddBtn.simulate('click');

      expect(actions.onIncrement).toBeCalled();
    });

    it('should not run before the set-time for triggering', (done) => {
      const { actions, incrementAsyncBtn } = setup(0);

      incrementAsyncBtn.simulate('click');

      setTimeout(() => {
        expect(actions.onIncrement).not.toBeCalled();
        done();
      }, settings.ASYNC_TRIGGER - 2);
    });

    it('should run increment asynchronously after set-time for triggering', (done) => {
      const { actions, incrementAsyncBtn } = setup(0);
      incrementAsyncBtn.simulate('click');

      setTimeout(()=>{
        expect(actions.onIncrement).toBeCalled();
        done();
      }, settings.ASYNC_TRIGGER + 2);
    });
  });
});