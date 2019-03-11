import React from 'react';
import Counter from './counter';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Component', () => {
  describe('.counter', () => {
    it('should display count', () => {
      let initialState = [{count: 0}];
      const component = shallow(<Counter value={initialState} />);

      expect(component.find('.CounterApp').text()).toMatch(
        'Clicked: 0 times'
      );
    });

    it('first button should call onIncrement', () => {
      let initialState = [{count: 0}];
      const onIncrement = jest.fn();
      const component = shallow(<Counter value={initialState} onIncrement={onIncrement} />);
      const increment_btn = component.find('#btn__increment');

      increment_btn.simulate('click');

      expect(onIncrement).toHaveBeenCalled();
    });

    it('second button should call onDecrement', () => {
      const actions = {
        onDecrement: jest.fn()
      };

      let initialState = [{count: 0}];
      const component = shallow(<Counter value={initialState} onDecrement={actions.onDecrement} />);
      const second_button = component.find('#btn__decrement');

      second_button.simulate('click');

      expect(actions.onDecrement).toBeCalled();
    });

    it('should call increment function if current count is odd', () => {
      const actions = {
        onIncrement: jest.fn()
      };

      const initialState = [{count: 3}];
      const component = shallow(<Counter value={initialState} onIncrement={actions.onIncrement}/>);
      const thirdButton = component.find('button#btn__increment_if_odd');

      thirdButton.simulate('click');

      expect(actions.onIncrement).toBeCalled();
    });

    it('should not call increment function if current count is even', () => {
      const actions = {
        onIncrement: jest.fn()
      };

      const initialState = [{count: 4}];
      const component = shallow(<Counter value={initialState} onIncrement={actions.onIncrement} />);
      const thirdButton = component.find('button#btn__increment_if_odd');

      thirdButton.simulate('click');

      expect(actions.onIncrement).not.toBeCalled();
    });
  });
});