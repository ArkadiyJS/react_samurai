import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import Footer from './components/footer/footers';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Setting from './components/setting/setting';
import MusicContent from './components/musiс/music';
import News from './components/news/news';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';




function App(props) {
  return (

    <div className='app-wrapper' >
      <Header />
      <Navbar />

      <div className='app-wrapper-content' >
        <Routes>
        <Route path='/users*' element={<UsersContainer />}></Route>
          <Route path='/news*' element={<News />}></Route>
          <Route path='/setting*' element={<Setting />}></Route>
          <Route path='/music*' element={<MusicContent />}></Route>
          <Route path='/dialogs*' element={<DialogsContainer store={props.store} state={props.state} />}> </Route>
          <Route path='/profile*' element={<ProfileContainer  store={props.store} state={props.state}  />}> </Route>

        </Routes>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
