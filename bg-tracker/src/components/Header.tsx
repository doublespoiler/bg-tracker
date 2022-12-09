import React from 'react';
import MenuIcon from './icons/general/Menu';
import HomeIcon from './icons/general/Home';

function Header(){
  return(
      <header className="nav">
        <h1>Board Game App</h1>
        <MenuIcon />
        <HomeIcon />
      </header>
  );
}

export default Header;