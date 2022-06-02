import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'



 let renderEntireTree = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      
      <BrowserRouter>
      <Provider store={store}>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}
        />
      </Provider>
      </BrowserRouter>
      
      
    </React.StrictMode>,
  
    document.getElementById('root')
  );}

  renderEntireTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  renderEntireTree(state);
});

