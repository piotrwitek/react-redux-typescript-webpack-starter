import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { App } from './app';

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// development hot-reload configs
if (module.hot) {
  // app
  module.hot.accept('./app', async () => {
    // const NextApp = require('./app').App;
    const NextApp = (await System.import('./app')).App;
    render(NextApp);
  });

  // store
  // module.hot.accept('./redux/reducers', () => {
  //   const reducers = require('./redux/reducers').default;
  //   return store.replaceReducer(reducers);
  // });

  // epics
}
