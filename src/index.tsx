import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { default as App } from './app';

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  // app
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
    // render(App); // es2015
  });

  // store
  // module.hot.accept('./redux/reducers', () => {
  //   const reducers = require('./redux/reducers').default;
  //   return store.replaceReducer(reducers);
  // });

  // epics
}
