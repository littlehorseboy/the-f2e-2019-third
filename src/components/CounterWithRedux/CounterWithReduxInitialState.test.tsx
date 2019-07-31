import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line import/no-extraneous-dependencies
import CounterWithRedux from './CounterWithRedux';
import counterReducer from '../../reducers/counter/counter';

describe('Counter.tsx', (): void => {
  afterEach(cleanup);

  test('render toHaveTextContent "點了 0 下"', (): void => {
    const rootReducer = combineReducers({
      counterReducer,
    });
    const store = createStore(rootReducer, {
      counterReducer: {
        count: 2,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>,
    );

    expect(getByTestId('display-count')).toHaveTextContent('點了 2 下');
  });

  test('click add 1 button', (): void => {
    const rootReducer = combineReducers({
      counterReducer,
    });
    const store = createStore(rootReducer, {
      counterReducer: {
        count: 2,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>,
    );

    fireEvent.click(getByTestId('count-add-one'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 3 下');
  });

  test('click add 2 button', (): void => {
    const rootReducer = combineReducers({
      counterReducer,
    });
    const store = createStore(rootReducer, {
      counterReducer: {
        count: 2,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>,
    );

    fireEvent.click(getByTestId('count-add-two'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 4 下');
  });

  test('click add 2 button', (): void => {
    const rootReducer = combineReducers({
      counterReducer,
    });
    const store = createStore(rootReducer, {
      counterReducer: {
        count: 2,
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>,
    );

    fireEvent.click(getByTestId('count-add-one'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 3 下');
    fireEvent.click(getByTestId('count-add-two'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 5 下');
  });
});
