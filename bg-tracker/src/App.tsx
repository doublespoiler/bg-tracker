import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import React from 'react';
import ReactDOM from "react-dom";



function App() {
  return (
    <div id="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));
