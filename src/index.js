import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const Default = App.default;

render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(<AppContainer><Default /></AppContainer>, document.getElementById('app'));
  });
}
