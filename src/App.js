
import './App.css';
import Navbar from './components/nav';
import Header from './components/header';
import ContentCore from './components/content';
import Footer from './components/footers';


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
