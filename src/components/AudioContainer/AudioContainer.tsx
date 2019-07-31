import React from 'react';

const mp3 = require('../../assets/mp3/Splashing_Around.mp3'); // eslint-disable-line @typescript-eslint/no-var-requires

export default function AudioContainer(): JSX.Element {
  return (
    <audio data-testid="audio" src={mp3} controls>
      <track kind="captions" srcLang="en" label="english_captions" />
    </audio>
  );
}
