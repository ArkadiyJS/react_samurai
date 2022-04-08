import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import ProfileCore from './components/profile/profile';
import Footer from './components/footer/footers';


function App() {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <ProfileCore />
     <Footer />
    </div>
  );
}

export default App;
