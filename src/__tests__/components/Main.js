import React from 'react';
import { mount } from 'enzyme';
import Main from '../../components/Main/Main';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('render no links when store is empty', () => {
  const mockUserLinks = [];
  const store = mockStore({
    userLinks: mockUserLinks
  });
  const wrapper = mount(
    <Provider store={store}>
      <Main userLinks={[]} />
    </Provider>
  );
  expect(wrapper.find('.linkCard').length).toBe(0);
});

it('Should render userLinks', () => {
  const mockUserLinks = [
    {
      _id: '1234',
      name: 'Link1',
      url: 'google.com',
      short_link: 'https://rel.ink/gZzjjg'
    },
    {
      _id: '5678',
      name: 'Link2',
      url: 'google.com',
      short_link: 'https://rel.ink/gZzjjg'
    },
    {
      _id: '9101',
      name: 'Link3',
      url: 'google.com',
      short_link: 'https://rel.ink/gZzjjg'
    }
  ];
  const store = mockStore({
    userLinks: mockUserLinks
  });
  const mockGetUserLinks = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <Main getUserLinks={mockGetUserLinks} />
    </Provider>
  );
  expect(wrapper.find('.linkCard').length).toBe(mockUserLinks.length);
});
