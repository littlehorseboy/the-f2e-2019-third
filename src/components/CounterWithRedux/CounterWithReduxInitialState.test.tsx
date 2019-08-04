import React from 'react';
import { createStore, combineReducers, Store } from 'redux';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  render,
  fireEvent,
  cleanup,
  RenderResult,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line import/no-extraneous-dependencies
import CounterWithRedux from './CounterWithRedux';
import counterReducer from '../../reducers/counter/counter';

interface StoreTypes {
  counterReducer: {
    count: number;
  };
}


interface WithReduxConfig {
  initialState?: {
    counterReducer: {
      count: number;
    };
  };
  store?: Store<StoreTypes>;
}

const rootReducer = combineReducers({
  counterReducer,
});

interface RenderWithReduxI extends RenderResult {
  store: Store;
}

const renderWithRedux = (
  ui: JSX.Element,
  { initialState, store = createStore(rootReducer, initialState) }:
  WithReduxConfig = {},
): RenderWithReduxI => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

describe('Counter.tsx', (): void => {
  afterEach(cleanup);

  test('render toHaveTextContent "點了 2 下"', (): void => {
    const { getByTestId } = renderWithRedux(
      <CounterWithRedux />, {
        initialState: {
          counterReducer: {
            count: 2,
          },
        },
      },
    );

    expect(getByTestId('display-count')).toHaveTextContent('點了 2 下');
  });

  test('click add 1 button', (): void => {
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
