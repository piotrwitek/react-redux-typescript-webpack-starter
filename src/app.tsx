import * as React from 'react';
import Counter from './counter';

type Props = {
  className?: string,
  style?: React.CSSProperties,
};

const MyComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <h1>React / Redux / Typescript / Webpack2 - App Starter</h1>
      <p>Hot reload with persisted state!</p>
      <Counter />
    </div>
  );
};

export default MyComponent;
