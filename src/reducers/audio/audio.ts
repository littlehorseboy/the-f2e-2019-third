import {
  audioActionTypes,
  AUDIO_PLAY,
  AUDIO_STOP,
  AUDIO_PAUSE,
} from '../../actions/audio/audio';

export interface AudioI {
  audioStatus: 'playing' | 'stopped' | 'paused';
}

// 創作者 associate 專輯 associate 歌曲
const initState: AudioI = {
  audioStatus: 'stopped',
};

const reducer = (state = initState, action: audioActionTypes): AudioI => {
  switch (action.type) {
    case AUDIO_PLAY:
      return {
        audioStatus: 'playing',
      };
    case AUDIO_STOP:
      return {
        audioStatus: 'stopped',
      };
    case AUDIO_PAUSE:
      return {
        audioStatus: 'paused',
      };
    default:
      return state;
  }
};

export default reducer;
