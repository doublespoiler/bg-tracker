import React from 'react';
import Menu from './Menu';
import { IconUsers, IconHome, IconSearch} from '@tabler/icons';


const Footer:React.FC = () =>{
  return(
    <footer>
      <IconHome/>
      <IconUsers/>
      <IconSearch />
    </footer>
  );
}

export default Footer;