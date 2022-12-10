import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation.jsx';
import * as StarIcon from './components/icons/general/StarIcon';
// import React from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Menu from './components/Menu';

function App() {
  return (
      <div id="wrapper">
      
        
        <Header />
        <MainContent />
        <Footer /> {/*this one does*/}
        <Menu /> {/*this one won't render*/}
      </div>
  );
}

// updated from ReactDOM.render, because React 18 uses createRoot
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App/>);

createRoot(document.getElementById('app')!).render(<App />);
