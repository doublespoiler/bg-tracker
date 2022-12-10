import React from 'react';
import HomeIcon from './icons/general/HomeIcon';
import * as Users from './icons/general/UsersIcon';
import Menu from './Menu';


function Footer(){
  return(
    <div className="footer">
      <p>footer</p>
      <HomeIcon />
      <Users.Multi />
    </div>
  );
}

export default Footer;