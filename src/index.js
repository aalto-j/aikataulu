
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import App from './App.js';
import Setup from './Setup.js'
import Lista from './Lista.js'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
                <Route exact path="/" component={App}/>
                <Route exact path="/setup" component={Setup}/>
                <Route exact path="/lista" component={Lista}/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);