import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

render(
  <AppContainer
    component={App}
  />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer
        component={require('./containers/App').default}
      />,
      document.getElementById('app')
    );
  });
}
