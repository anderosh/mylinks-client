import React from 'react';
// import App from '../../App';
import { shallow, mount, render } from 'enzyme';
import { Main } from '../../components/Main/Main';
import { Provider } from 'react-redux';
import store from '../../store';

it('render no links when store is empty', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Main userLinks={[]} />
    </Provider>
  );
  expect(wrapper.find('.linkCard').length).toBe(0);
});
