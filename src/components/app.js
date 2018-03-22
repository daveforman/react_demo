import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.png';
import Form from './form';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Lumberjacks Only</h1>
            <Form/>
        </div>
    </div>
);

export default App;
