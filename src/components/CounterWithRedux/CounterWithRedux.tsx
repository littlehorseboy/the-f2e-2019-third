import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTypes } from '../../reducers/configureStore';
import { countAddOne, countAddTwo } from '../../actions/counter/counter';

export default function CounterWithRedux(): JSX.Element {
  const count = useSelector((
    state: storeTypes,
  ): number => state.counterReducer.count);

  const dispatch = useDispatch();

  const handleClickCountAddOne = (): void => {
    dispatch(countAddOne());
  };

  const handleClickCountAddTwo = (): void => {
    dispatch(countAddTwo());
  };

  return (
    <div>
      <div data-testid="display-count">
        點了 {count} 下
      </div>

      <button data-testid="count-add-one" onClick={handleClickCountAddOne}>add 1</button>

      <button data-testid="count-add-two" onClick={handleClickCountAddTwo}>add 2</button>
    </div>
  );
}
