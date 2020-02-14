import React from 'react';
import './App.css';
import Header from './components/header';
import ApplicationBody from './components/applicationBody';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header ></Header>
      <ApplicationBody></ApplicationBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
