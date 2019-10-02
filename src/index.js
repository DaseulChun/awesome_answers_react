// We are importing the react package
import React from 'react';
import ReactDOM from 'react-dom';
// Importing CSS file
import './index.css';
// is same as: 
// const App = require('./App');
import App from './App';
import * as serviceWorker from './serviceWorker';

// Component start with "Capital letter"
// Container that we want to render is (#root) in index.html
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
