import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import React from 'react';
import {createRoot} from 'react-dom/client';
import Menu from './components/Menu';

const App:React.FC = () => {
  const [count, setCount] = React.useState(false);

  function handleClickSearch(){
    setCount(prevCount => !prevCount);
    console.log(count)
  }

  return (
      <div id="wrapper">
        {/* <Menu /> */}
        <Header />
        <MainContent count={count} stopSearch={()=>handleClickSearch()}/>
        <Footer onClickSearch={handleClickSearch}/>
      </div>
  );
}

// updated from ReactDOM.render, because React 18 uses createRoot
// const container = document.getElementById('app');
// const root = createRoot(container!);
// root.render(<App/>);

createRoot(document.getElementById('app')!).render(<App />);
