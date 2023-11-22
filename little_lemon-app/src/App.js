import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    {/* Navigation section */}
    <Nav/>

    {/* Header section */}
    <Header/>
    {/* Main Content section */}
    <Main/>
    {/* Footer section */}
    <Footer/>
    </>
  );
}

export default App;
