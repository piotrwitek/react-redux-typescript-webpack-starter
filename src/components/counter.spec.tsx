import * as React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './counter';

describe('Counter', () => {
  const component = shallow(<Counter />);

  it('should match a snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should initialize state', () => {
    expect(component.state()).toEqual({ count: 0 });
  });

  it('should change state after a second', (done) => {
    setTimeout(() => {
      expect(component.state()).not.toEqual({ count: 0 });
      done();
    }, 1500);
  });
});
