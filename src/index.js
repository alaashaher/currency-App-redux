import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store.js';
import {Provider,connect} from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  <provider/>,document.getElementById('root')
);

module.hot.accept();
