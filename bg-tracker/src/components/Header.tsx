import React from 'react';
import * as MenuIcon from './icons/general/MenuIcon';
import * as HomeIcon from './icons/general/HomeIcon';

const Header = () => {
  return(
      <header className="nav">
        <h1>Board Game App</h1>
        <MenuIcon.Menu />
      </header>
  );
}

export default Header;