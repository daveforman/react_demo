import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


const user = {
    first: "Dave",
    last: "Forman"
}

function greetUser(user){
    return user.first + ' ' + user.last;
}

const greeting = <h1>Hello {greetUser(user)}</h1>;

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
