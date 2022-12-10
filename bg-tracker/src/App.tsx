import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation.jsx';
import StarIcon from './components/icons/general/Star';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Menu from './components/Menu';

function App() {
  return (
      <div id="wrapper">
      <Footer /> {/*this one does*/}
        <Menu /> {/*this one won't render*/}
        <Header />
        <MainContent />
        
      </div>
  );
}

// updated from ReactDOM.render, because React 18 uses createRoot
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App/>);

createRoot(document.getElementById('app')!).render(<App />);
