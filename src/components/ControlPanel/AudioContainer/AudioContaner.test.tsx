import React from 'react';
import { render, cleanup } from '@testing-library/react'; // eslint-disable-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line import/no-extraneous-dependencies
import AudioContainer from './AudioContainer';

describe('AudioContainer.tsx', (): void => {
  afterEach(cleanup);

  test('<audio> tagName === "AUDIO"', (): void => {
    const { getByTestId } = render(<AudioContainer
      sliderChangeProgressValue={0}
      setPlaybackProgressValue={jest.fn()}
      setPlaybackProgressMaxValue={jest.fn()}
      volumeValue={0}
      muted={false}
    />);
    expect((getByTestId('audio') as HTMLAudioElement).tagName === 'AUDIO');
  });

  test('<audio> autoplay === false', (): void => {
    const { getByTestId } = render(<AudioContainer
      sliderChangeProgressValue={0}
      setPlaybackProgressValue={jest.fn()}
      setPlaybackProgressMaxValue={jest.fn()}
      volumeValue={0}
      muted={false}
    />);
    expect((getByTestId('audio') as HTMLAudioElement).autoplay === false);
  });

  test('<audio> includes <track kind="captions"', (): void => {
    const { getByTestId } = render(<AudioContainer
      sliderChangeProgressValue={0}
      setPlaybackProgressValue={jest.fn()}
      setPlaybackProgressMaxValue={jest.fn()}
      volumeValue={0}
      muted={false}
    />);
    expect((getByTestId('audio') as HTMLAudioElement).innerHTML.includes('<track kind="captions"'));
  });

  test('<audio> toBeInTheDocument', (): void => {
    const { getByTestId } = render(<AudioContainer
      sliderChangeProgressValue={0}
      setPlaybackProgressValue={jest.fn()}
      setPlaybackProgressMaxValue={jest.fn()}
      volumeValue={0}
      muted={false}
    />);
    expect((getByTestId('audio') as HTMLAudioElement)).toBeInTheDocument();
  });
});
