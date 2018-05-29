import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './containers/index.jsx';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
