import React from 'react';
import { render, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import AudioContainer from './AudioContainer';

describe('AudioContainer.tsx', (): void => {
  afterEach(cleanup);

  test('test AudioContainer', (): void => {
    const { getByTestId } = render(<AudioContainer />);
    expect(getByTestId('root-test').textContent).toBe('test');
  });
});
