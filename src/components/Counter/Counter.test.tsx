import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line import/no-extraneous-dependencies
import Counter from './Counter';

describe('Counter.tsx', (): void => {
  afterEach(cleanup);

  test('render toHaveTextContent "點了 0 下"', (): void => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('display-count')).toHaveTextContent('點了 0 下');
  });

  test('click add 1 button', (): void => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('display-count')).toHaveTextContent('點了 0 下');
    fireEvent.click(getByTestId('count-add-one'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 1 下');
  });

  test('click add 2 button', (): void => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('display-count')).toHaveTextContent('點了 0 下');
    fireEvent.click(getByTestId('count-add-two'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 2 下');
  });

  test('click add 2 button', (): void => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('display-count')).toHaveTextContent('點了 0 下');
    fireEvent.click(getByTestId('count-add-one'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 1 下');
    fireEvent.click(getByTestId('count-add-two'));
    expect(getByTestId('display-count')).toHaveTextContent('點了 3 下');
  });
});
