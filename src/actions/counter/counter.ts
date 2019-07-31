export const COUNT_ADD_ONE = 'COUNT_ADD_ONE';
export const COUNT_ADD_TWO = 'COUNT_ADD_TWO';

interface CountAddOneActionI {
  type: typeof COUNT_ADD_ONE;
}

export const countAddOne = (): CountAddOneActionI => ({
  type: COUNT_ADD_ONE,
});

interface CountAddTwoActionI {
  type: typeof COUNT_ADD_TWO;
}

export const countAddTwo = (): CountAddTwoActionI => ({
  type: COUNT_ADD_TWO,
});

export type counterActionTypes = CountAddOneActionI | CountAddTwoActionI;
