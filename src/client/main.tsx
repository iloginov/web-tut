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

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("../components/App", () => {
    const NextApp = require("../components/App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      rootEl
    );
  });
}
