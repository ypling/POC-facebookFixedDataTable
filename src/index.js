/**
 * Created by leonardli on 3/24/17.
 */
import "./index.html";
import "fixed-data-table/dist/fixed-data-table.css"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import {AppContainer} from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-app')
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./app/App', () => { render(App) })
}