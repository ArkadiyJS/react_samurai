import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import Footer from './components/footer/footers';
import Dialogs from './components/dialogs/dialogs';
import ProfileCore from './components/profile/profile';
import { Route, Routes } from 'react-router-dom';


function App(props) {
  let posts = [
    {id:1, message: 'hi gayz', likesCount:12 },
    {id:2, message: 'hi gayz mayz', likesCount:15 },
    {id:2, message: 'hi dudu', likesCount:15 },
    {id:2, message: 'hi gara dada', likesCount:15 },
    
  ]
 
  
  return (

    <div className='app-wrapper' >
      <Header />
      <Navbar />

      <div className='app-wraper-content' >
        <Routes>
          <Route path='/dialogs' element={<Dialogs />}></Route>
          <Route path='/profile' element={<ProfileCore posts={posts} />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
