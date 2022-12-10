import React from 'react';
import * as HomeIcon from './icons/general/HomeIcon';
import * as UsersIcon from './icons/general/UsersIcon';
import Menu from './Menu';
import * as SearchIcon from './icons/general/SearchIcon';


const Footer:React.FC = () =>{
  return(
    <footer>
      <HomeIcon.Home />
      <UsersIcon.Multi />
      <SearchIcon.Search />
    </footer>
  );
}

export default Footer;