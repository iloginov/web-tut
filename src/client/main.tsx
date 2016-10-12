import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App           from '../components/App';

const { AppContainer } = require('react-hot-loader');
declare var module: { hot: any };

const rootEl = document.getElementById('react-view');
ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Enable Hot Module Realoding.
if (module.hot) {
  module.hot.accept();
}
