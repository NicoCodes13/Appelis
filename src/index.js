import React from 'react';
import ReactDom from 'react-dom';
import './assets/styles/app.scss';
import HelloWorld from './components/HelloWorld';

ReactDom.render(<HelloWorld />, document.getElementById('app'));
