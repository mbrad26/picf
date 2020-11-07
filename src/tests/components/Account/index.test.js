import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import store from '../../../redux/store';
import Account from  '../../../components/Account';

describe('Account', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <MemoryRouter initialEntries={['/account']}>
          <Account />
        </MemoryRouter>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});