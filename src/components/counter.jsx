import React from 'react';

class Counter extends React.Component {
  incrementIfOdd = () => {
    const { value, onIncrement } = this.props;
    let count = value[value.length - 1].count;

    if ((Math.abs(count) % 2) === 1) {
      onIncrement();
    }
  };

  render() {
    const {
      value,
      onIncrement,
      onDecrement
    } = this.props;
    let count = value[value.length - 1].count;

    return (
      <div className="CounterApp">
        <p id='clickCount'>
          Clicked: {count} times
        </p>
        <button id='btn__increment' onClick={onIncrement}>+</button>
        <button id='btn__decrement' onClick={onDecrement}>-</button>
        <button id='btn__increment_if_odd' onClick={ this.incrementIfOdd }>
          Increment (if odd)
        </button>
      </div>
    )
  }
}

export default Counter;