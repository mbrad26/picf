import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../redux/store/index';
import App from '../../../components/App';

describe('App', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
      );

    expect(container.firstChild).toMatchSnapshot();
  });
});