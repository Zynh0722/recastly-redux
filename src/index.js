import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store.js';
import App from './components/App.js';
import { Provider } from 'react-redux';

//DONE: Import the Provider component from 'react-redux' here!

//DONE: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('app')
);
