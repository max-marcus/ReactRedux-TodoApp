import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/App';

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
  , document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(<AppContainer><NextApp /></AppContainer>, document.getElementById('app'));
  });
}
