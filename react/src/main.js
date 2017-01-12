import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Draggable, Droppable } from 'react-drag-and-drop';
import App from './components/App';

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
