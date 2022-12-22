import React from 'react';
import { IconUsers, IconHome, IconSearch} from '@tabler/icons';

interface FooterProps{
  onClickSearch: Function
}

const Footer:React.FC<FooterProps> = (props) =>{
  //test

  return(
    <footer>
      <IconHome/>
      <IconUsers/>
      <IconSearch onClick={() => props.onClickSearch()}/>
    </footer>
  );
}

export default Footer;