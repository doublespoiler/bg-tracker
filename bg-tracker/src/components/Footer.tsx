import React from 'react';
import HomeIcon from './icons/general/Home';
import * as Users from './icons/general/Users';
import Menu from './Menu';


function Footer(){
  return(
    <div className="footer">
      <HomeIcon />
      <Users.MultiIcon />
      <Menu /> {/*this is the one that does render*/}
    </div>
  );
}

export default Footer;