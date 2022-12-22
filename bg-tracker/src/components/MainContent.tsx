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
    selectedList: "linkeditems?linkdata_index=boardgame&objectid=2004&objecttype=property&pageid=1&showcount=25&sort=rank&subtype=boardgamemechanic"
  });

  const handleClickGame = (objectId: string) => {
    console.log("clicked" + objectId);
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameDetail",
      selectedGame: objectId,
      selectedList: null
    }));
  }

  const handleClickList = (id: string) => {
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: null,
      selectedList: `linkeditems?linkdata_index=boardgame&objectid=${id}&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory` 
    }));
  }

  const handleClickCategory = (id: string) =>{
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: null,
      selectedList: `linkeditems?linkdata_index=boardgame&objectid=${id}&objecttype=property&showcount=25&sort=rank&subtype=boardgamecollection`
    }));
  }
  const handleClickMechanic = (id: string) =>{
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: null,
      selectedList: `linkeditems?linkdata_index=boardgame&objectid=${id}&objecttype=property&showcount=25&sort=rank&subtype=boardgamemechanic`
    }));
  }

  if(mainContent.mainContent === "gameDetail"){
    return(
      <main>
        <GameDetail selectedGame={mainContent.selectedGame} onGameClick={handleClickGame} onClickMechanic={handleClickMechanic} onClickCategory={handleClickCategory}/>
      </main>
    )
  }
  if(mainContent.mainContent === "gameList"){
    return(
      <main>
        <GameList selectedList={mainContent.selectedList} onGameClick={handleClickGame} />
      </main>
    )
  }
  // return(
  //   // <main>
  //   //   <GameDetail selectedGame='145659' onGameClick={handleClickGame} onListClick={handleClickList}/>
  //   // </main>
  //   // <main>
  //   //   <GameList selectedList={mainContent.selectedList} onGameClick={handleClickGame} />
  //   // </main>
  // )
}

export default MainContent;