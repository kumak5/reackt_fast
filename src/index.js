import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./redux/StoreContext";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))

reportWebVitals();
