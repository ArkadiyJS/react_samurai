import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
let posts = [
  {id:1, message: 'hi gayz', likesCount:12 },
  {id:2, message: 'hi gayz mayz', likesCount:15 },
  {id:2, message: 'hi dudu', likesCount:15 },
  {id:2, message: 'hi gara dada', likesCount:15 },
  
]
let dialogData = [
  { id: 1, name:'ark'},
  { id: 2, name:'sveta'},
  { id: 3, name:'matvey'},
  { id: 4, name:'sofa'},
  { id: 5, name:'kuzya'},

]
let messagesData = [
  { id: 1, name:'ark message'},
  { id: 2, name:'sveta message'},
  { id: 3, name:'matvey message'},
  { id: 4, name:'sofa message'},
  { id: 5, name:'kuzya message'},

]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App posts={posts} dialogData={dialogData} messagesData={messagesData}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
