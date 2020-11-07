import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../redux/store';
import Followers from  '../../../components/Followers/index';

describe('Account', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Followers />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});