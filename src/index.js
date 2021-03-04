
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import App from './App.js';
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/"><App/></Route>
            <Router path="/setup"/><Router/>
            <Router path="/lista"/><Router/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);