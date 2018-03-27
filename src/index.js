//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/grommet/grommet-hpe.min.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

//$FlowFixMe
const store = configureStore();

//$FlowFixMe
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    //$FlowFixMe
    document.getElementById('root')
);