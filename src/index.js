import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



 let callSubscriber = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
  
    document.getElementById('root')
  );}

  callSubscriber(store.getState());

store.subscribe(callSubscriber);

