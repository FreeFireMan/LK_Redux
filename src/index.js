import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './conteiners/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route,link,Switch} from "react-router-dom";
import { createHashHistory } from 'history';

import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"

const history = createHashHistory();

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
    <Route  path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
