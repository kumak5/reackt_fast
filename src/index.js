import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 0, message:'Hi, how are you?', likesCount: 0},
    {id: 1, message:'It\'s my first post!', likesCount: 25}
]

let dialogs = [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Nataliya'},
    {id: 4, name: 'Nikolya'},
    {id: 5, name: 'Anastasiya'}
]

let messages = [
    {id: 1, message: 'Hi1'},
    {id: 2, message: 'Hi2'},
    {id: 3, message: 'Hi3'},
    {id: 4, message: 'Hi4'},
    {id: 5, message: 'Hi5'},
    {id: 6, message: 'Hi6'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialoges={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
