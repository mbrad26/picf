import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../redux/store';
import Following from  '../../../components/Following/index';

describe('Following', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Following />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});