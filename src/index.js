import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './reducers/index'
import {Provider} from 'react-redux'

const mystore = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );




ReactDOM.render(
<Provider store={mystore}>
<App/>
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();