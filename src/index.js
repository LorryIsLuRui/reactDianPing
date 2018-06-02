import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Page from './containers/index.jsx';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import RouteMap from './router/routeMap'

const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <RouteMap/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
