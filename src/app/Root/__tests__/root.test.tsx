import { shallow } from 'enzyme';
import * as React from 'react';
import initialState from '../../../data/initialState';
import createStore from '../../configureStore';
import Root from '../Root';

const RootWithStore = shallow(<Root store={createStore(initialState)} />);

describe('Root', () => {
  it('should exist', function() {
    expect(RootWithStore).toBeDefined();
  });
});
