import React from 'react';
import ReactDom, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Main } from './components/Main'

ReactDom.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

