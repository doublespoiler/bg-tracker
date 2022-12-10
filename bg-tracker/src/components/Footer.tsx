import React from 'react';
import * as HomeIcon from './icons/general/HomeIcon';
import * as UsersIcon from './icons/general/UsersIcon';
import Menu from './Menu';


function Footer(){
  return(
    <div className="footer">
      <p>footer</p>
      <HomeIcon.Home />
      <UsersIcon.Multi />
    </div>
  );
}

export default Footer;