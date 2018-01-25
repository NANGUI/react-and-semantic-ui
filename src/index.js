import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './components/App';
import Element from './components/Element';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={App} />
      <Route path="/elements" component={Element} />
      <Route path="/collections" />
      <Route path="/vues" />
      <Route path="/modules" />
      <Route path="/plus" />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);