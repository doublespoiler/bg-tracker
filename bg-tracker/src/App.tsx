import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation.jsx';
import * as StarIcon from './components/icons/general/StarIcon';
// import React from 'react';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Menu from './components/Menu';

const App:React.FC = () => {
  return (
      <div id="wrapper">
        <Menu />
        <Header />
        <MainContent />
        <Footer />
      </div>
  );
}

// updated from ReactDOM.render, because React 18 uses createRoot
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App/>);

createRoot(document.getElementById('app')!).render(<App />);
