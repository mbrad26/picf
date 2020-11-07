import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react'

import store from '../../../redux/store';
import Settings from '../../../components/Account/settings';

describe('Settings', () => {
  it('renders a snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Settings />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
