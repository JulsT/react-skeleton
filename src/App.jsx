import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'store';

import Routes from './Routes';

import 'styles/primereact.theme';

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback="Loading...">
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
