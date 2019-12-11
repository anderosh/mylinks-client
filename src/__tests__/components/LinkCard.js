import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LinkCard from '../../components/LinkCard/LinkCard';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('render no links when store is empty', () => {
  const mockLink = {
    _id: '1234',
    name: 'Link1',
    url: 'google.com',
    short_link: 'https://rel.ink/gZzjjg'
  };
  const store = mockStore({});
  const wrapper = mount(
    <Provider store={store}>
      <LinkCard link={mockLink} />
    </Provider>
  );
  expect(wrapper.debug()).toMatchSnapshot();
});
