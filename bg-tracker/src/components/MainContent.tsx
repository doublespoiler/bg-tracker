import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';


interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState({
    mainContent: "gameList",
    selectedGame: null,
    selectedList: null
  });

  const handleClickGame = (objectId: string) => {
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameDetail",
      selectedGame: objectId,
      selectedList: null
    }));
  }

  const handleClickList = (searchQuery: string) => {
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: null,
      selectedList: searchQuery 
    }));
  }

  if(mainContent.mainContent === "gameDetail"){
    return(
      <main>
        <GameDetail selectedGame={mainContent.selectedGame} />
      </main>
    )
  }
  if(mainContent.mainContent === "gameList"){
    return(
      <main>
        <GameList selectedList={mainContent.selectedList} />
      </main>
    )
  }
}

export default MainContent;