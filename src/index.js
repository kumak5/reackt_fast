import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from "./redux/StoreContext";


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe (() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();
