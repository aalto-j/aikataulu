
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import App from './App.js';
import Setup from './Setup.js'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
                <Route exact path="/"><App/></Route>
                <Route path="/setup"><Setup/></Route>
                <Route path="/lista">Juu</Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);