import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as types from './constants/action_types';
import {createStore} from "redux";
import counterReducer from './reducers/reducer';
import Counter from "./components/counter";

const store = createStore(counterReducer);
const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(
    <Counter
      value={ store.getState() }
      onIncrement={ () => store.dispatch({type: types.INCREMENT}) }
      onDecrement={ () => store.dispatch({type: types.DECREMENT}) }
    />,
    rootElement
);

render();
store.subscribe(render);
serviceWorker.unregister();
