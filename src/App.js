import './App.css';
import {Navbar, Brand, CTA} from './components';
import { Footer, Blog, Possiblity, Features, WhatGPT3, Header } from './containers';

// rafc

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
