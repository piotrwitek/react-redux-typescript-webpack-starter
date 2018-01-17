import * as React from 'react';
import { shallow } from 'enzyme';
import { ListView } from './list-view';

describe('ListView', () => {

  describe('without props', () => {
    const component = shallow(<ListView />);

    it('should match a snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with title', () => {
    const component = shallow(<ListView title="A title" />);

    it('should match a snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have a title header', () => {
      const header = component.find('h2');

      expect(header.exists()).toBeTruthy();
      expect(header.contains('A title')).toBeTruthy();
    });
  });

  describe('with children', () => {
    const component = shallow(<ListView><span>child</span></ListView>);

    it('should match a snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should have a child', () => {
      const child = component.find('span');

      expect(child.exists()).toBeTruthy();
      expect(child.contains('child')).toBeTruthy();
      expect(component.find('div').children().length).toEqual(1);
    });
  });

});
