import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';


interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState();

  const handleClick = () => {
    
  }

  return (
    <main>
      <GameList />
      {/* <GameDetail />
      <SearchForm /> */}
    </main>
  )
}

export default MainContent;