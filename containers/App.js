import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import { createStore, combineReducers } from 'redux';
import BeerApp from './BeerApp';

const reducer = combineReducers(reducers);

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        	{() => <BeerApp />}
      </Provider>
    );
  }
}