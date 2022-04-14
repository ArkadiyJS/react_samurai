import React from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import Header from './components/header/header';

import Footer from './components/footer/footers';
import Dialogs from './components/dialogs/dialogs'

function App() {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navbar />

     <div className='app-wraper-content'>
     <Dialogs />
     
     </div>

     <Footer />
    </div>
  );
}

export default App;
