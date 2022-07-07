import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Footer from './components/footer/footers';
import DialogsContainer from './components/dialogs/dialogsContainer';
import { Route, Routes } from 'react-router-dom';
import Setting from './components/setting/setting';
import MusicContent from './components/musiс/music';
import News from './components/news/news';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import LoginPage from './components/login/login';

// 'параметры для URL пишем' в route в path '/profile/:userId?'


function App(props) {
  return (

    <div className='app-wrapper' >
      
      <HeaderContainer />
      <Navbar />

      <div className='app-wrapper-content' >
        <Routes>
          <Route path='/login' element={<LoginPage />}></Route>
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
