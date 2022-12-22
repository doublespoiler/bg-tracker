import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Menu from './components/Menu';

const App:React.FC = () => {
  const [count, setCount] = React.useState(0);

  const handleClickSearch = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
      <div id="wrapper">
        {/* <Menu /> */}
        <Header />
        <MainContent count={count}/>
        <Footer onClickSearch={handleClickSearch}/>
      </div>
  );
}

// updated from ReactDOM.render, because React 18 uses createRoot
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App/>);

createRoot(document.getElementById('app')!).render(<App />);
