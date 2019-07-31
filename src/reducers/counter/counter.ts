import { counterActionTypes, COUNT_ADD_ONE, COUNT_ADD_TWO } from '../../actions/counter/counter';

export interface CountI {
  count: number;
}

const initState = {
  count: 0,
};

const reducer = (state = initState, action: counterActionTypes): CountI => {
  switch (action.type) {
    case COUNT_ADD_ONE:
      return {
        count: state.count + 1,
      };
    case COUNT_ADD_TWO:
      return {
        count: state.count + 2,
      };
    default:
      return state;
  }
};

export default reducer;
