import { createAction } from 'typesafe-actions';

const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

export const increment = createAction(INCREMENT);
export const add = createAction(ADD, (amount: number) => ({
  type: ADD, payload: amount,
}));
