import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';


interface MainContentProps{
  count: number
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState({
    mainContent: "gameList",
    selectedGame: null,
    selectedList: "2004",
    listType: "boardgamemechanic"
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

  React.useEffect(() => {
    if(props.count !== 0){
      console.log("search clicked");
    }
  }, [props.count])

  const handleSearchClick = () => {
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "search",
      selectedGame: null,
      selectedList: null,
      listType: null
    }));
  }

  if(mainContent.mainContent === "gameDetail"){
    return(
      <main>
        <GameDetail selectedGame={mainContent.selectedGame} onGameClick={handleClickGame} onClickMechanic={handleClickList} onClickCategory={handleClickList} onClickFamily={handleClickList}/>
      </main>
    )
  }
  if(mainContent.mainContent === "gameList"){
    return(
      <main>
        <GameList selectedList={mainContent.selectedList} onGameClick={handleClickGame} listType={mainContent.listType}/>
      </main>
    )
  }
  // if(mainContent.mainContent === "search"){
  //   return(
  //     <SearchForm />
  //   )
  // }
}

export default MainContent;