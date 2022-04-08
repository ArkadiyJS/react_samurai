import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';
import ContentCore from './components/content/content';
import Footer from './components/footer/footers';


function App() {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <ContentCore />
     <Footer />
    </div>
  );
}

export default App;
