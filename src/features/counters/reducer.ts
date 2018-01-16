import { combineReducers } from 'redux';
import { getType, getReturnOfExpression } from 'typesafe-actions';

import * as countersActions from './actions';
const returnsOfActions = Object.values(countersActions).map(getReturnOfExpression);
export type Action = typeof returnsOfActions[number];

export type State = {
  readonly reduxCounter: number;
};

export const reducer = combineReducers<State, Action>({
  reduxCounter: (state = 0, action) => {
    switch (action.type) {
      case getType(countersActions.increment):
        return state + 1; // action is type: { type: "INCREMENT"; }

      case getType(countersActions.add):
        return state + action.payload; // action is type: { type: "ADD"; payload: number; }

      default:
        return state;
    }
  },
});
