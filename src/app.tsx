import * as React from 'react';
import { Counter } from '@src/components';

type Props = {
};

export class App extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>React / Redux / Typescript / Webpack2 - App Starter</h1>
        <p>Hot reload with persisted state!</p>
        <Counter />
      </div>
    );
  }
}
