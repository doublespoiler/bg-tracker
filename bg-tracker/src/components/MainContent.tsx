import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';


interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState();

  return (
    <div>
      <GameList />
      <GameDetail />
      <SearchForm />
    </div>
  )
}

export default MainContent;