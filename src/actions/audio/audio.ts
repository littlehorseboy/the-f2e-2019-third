export const AUDIO_PLAY = 'AUDIO_PLAY';
export const AUDIO_STOP = 'AUDIO_STOP';
export const AUDIO_PAUSE = 'AUDIO_PAUSE';

interface AudioPlayActionI {
  type: typeof AUDIO_PLAY;
}

export const audioPlay = (): AudioPlayActionI => ({
  type: AUDIO_PLAY,
});

interface AudioStopActionI {
  type: typeof AUDIO_STOP;
}

export const audioStop = (): AudioStopActionI => ({
  type: AUDIO_STOP,
});

interface AudioPauseActionI {
  type: typeof AUDIO_PAUSE;
}

export const audioPause = (): AudioPauseActionI => ({
  type: AUDIO_PAUSE,
});

export type audioActionTypes = AudioPlayActionI | AudioStopActionI | AudioPauseActionI;
