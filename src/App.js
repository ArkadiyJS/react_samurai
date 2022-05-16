import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import Footer from './components/footer/footers';
import Dialogs from './components/dialogs/dialogs';
import ProfileCore from './components/profile/profile';
import { Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';


function App(props) {
  
  

 
  
  return (

    <div className='app-wrapper' >
      <Header />
      <Navbar />

      <div className='app-wraper-content' >
        <Routes>
          <Route path='/dialogs' element={<Dialogs dialogData={props.state.dialogsPage.dialogData} messagesData={props.state.dialogsPage.messagesData}/>}></Route>
          <Route path='/profile' element={<ProfileCore posts={props.state.profilePage.posts} addPost={props.addPost} />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
