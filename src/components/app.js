import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import './app.css'
import Scrapbook from "./scrapbook";

export default () => {
    return (
         <div className="main-container">
            <h1 className="main-title">Drifting Scrapbook</h1>
            <Scrapbook/>
         </div>
    
    )
}