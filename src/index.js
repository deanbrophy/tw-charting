import React from 'react';
import { render } from 'react-dom';
import './tapEvents';
import App from './App';

const appInstance = React.createElement(App);

render(appInstance, document.getElementById('root'));
