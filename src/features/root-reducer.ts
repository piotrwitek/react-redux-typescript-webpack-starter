import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as counters, State as CountersState } from './counters/reducer';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  counters: CountersState;
}

import { RootAction } from './root-action';
export const rootReducer = combineReducers<RootState, RootAction>({
  router,
  counters,
});
