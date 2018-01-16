import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { History } from 'history';

import { ListView } from 'Components/list-view';
import { Counter } from 'Components/counter';

interface Props {
  store: Store<any>;
  history: History;
}

export class App extends React.Component<Props, {}> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route
            exact={true}
            path="/"
            render={() => (
              <ListView title="List of counters" >
                <Counter />
              </ListView>
            )}
          />
        </ConnectedRouter>
      </Provider>
    );
  }
}
