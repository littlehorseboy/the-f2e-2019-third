import React from 'react';
import { render, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line import/no-extraneous-dependencies
import AudioContainer from './AudioContainer';

describe('AudioContainer.tsx', (): void => {
  afterEach(cleanup);

  test('<audio> tagName === "AUDIO"', (): void => {
    const { getByTestId } = render(<AudioContainer />);
    expect((getByTestId('root-test') as HTMLAudioElement).tagName === 'AUDIO');
  });

  test('<audio> autoplay === false', (): void => {
    const { getByTestId } = render(<AudioContainer />);
    expect((getByTestId('root-test') as HTMLAudioElement).autoplay === false);
  });

  test('<audio> includes <track kind="captions"', (): void => {
    const { getByTestId } = render(<AudioContainer />);
    expect((getByTestId('root-test') as HTMLAudioElement).innerHTML.includes('<track kind="captions"'));
  });

  test('<audio> toBeInTheDocument', (): void => {
    const { getByTestId } = render(<AudioContainer />);
    expect((getByTestId('root-test') as HTMLAudioElement)).toBeInTheDocument();
  });
});
