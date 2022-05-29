import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import Footer from './components/footer/footers';
import Dialogs from './components/dialogs/dialogs';
import ProfileCore from './components/profile/profile';
import { Route, Routes } from 'react-router-dom';
import Setting from './components/setting/setting';
import MusicContent from './components/musiс/music';
import News from './components/news/news';



function App(props) {


  


  return (
    

    <div className='app-wrapper' >
      <Header />
      <Navbar />

      <div className='app-wraper-content' >
        <Routes>
          <Route path='/news' element={<News />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
          <Route path='/music' element={<MusicContent />}></Route>
          <Route path='/dialogs'
            element={<Dialogs  
             />}>

          </Route>


          <Route path='/profile' element={<ProfileCore 
            
            
             />}>

          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
