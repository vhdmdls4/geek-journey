import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import './index.scss';
import { Provider } from 'react-redux';
import store from 'store';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
