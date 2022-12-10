import React from 'react';
import * as MenuIcon from './icons/general/MenuIcon';
import * as HomeIcon from './icons/general/HomeIcon';

function Header(){
  return(
      <header className="nav">
        <h1>Board Game App</h1>
        <MenuIcon.Menu />
        <HomeIcon.Home />
      </header>
  );
}

export default Header;