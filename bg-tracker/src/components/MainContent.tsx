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
    selectedList: "2004"
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

  const handleClickList = (id: string, listType: string) => {
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: null,
      selectedList: id,
      listType: listType
    }));
  }

  // const handleClickCategory = (id: string) =>{
  //   setMainContent(prevMainContent => ({
  //     ...prevMainContent,
  //     mainContent: "gameList",
  //     selectedGame: null,
  //     selectedList: `${id}`,
  //     listType: `boardgamecategory`
  //   }));
  // }
  // const handleClickMechanic = (id: string) =>{
  //   setMainContent(prevMainContent => ({
  //     ...prevMainContent,
  //     mainContent: "gameList",
  //     selectedGame: null,
  //     selectedList: `${id}&objecttype=property&showcount=25&sort=rank&subtype=boardgamemechanic`
  //   }));
  // }

  if(mainContent.mainContent === "gameDetail"){
    return(
      <main>
        <GameDetail selectedGame={mainContent.selectedGame} onGameClick={handleClickGame} onClickMechanic={handleClickList} onClickCategory={handleClickList}/>
      </main>
    )
  }
  if(mainContent.mainContent === "gameList"){
    return(
      <main>
        <GameList selectedList={mainContent.selectedList} onGameClick={handleClickGame} listType="boardgamemechanic"/>
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