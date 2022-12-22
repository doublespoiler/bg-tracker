import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';
import SearchResult from './SearchResult';


interface MainContentProps{
  count: boolean
  stopSearch: Function
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState({
    mainContent: "gameList",
    selectedGame: null,
    selectedList: "2004",
    listType: "boardgamemechanic"
  });

  console.log(props);

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

  //to turn on/off search
  React.useEffect( () => {
    console.log(props.count);
    if(props.count === true){
      setMainContent( () => ({
        mainContent: "search",
        selectedGame: null,
        selectedList: null,
        listType: null
      }))
    }
  }, [props.count])

  //TODO: Type event
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(mainContent);
    const searchId = e.target.gameName.value;
    console.log(searchId);
    setMainContent(prevMainContent => ({
      ...prevMainContent,
      mainContent: "gameList",
      selectedGame: searchId,
      selectedList: null,
      listType: "search"
    }));
    props.stopSearch();
  }

  if(mainContent.mainContent === "gameDetail"){
    return(
      <main>
        <GameDetail selectedGame={mainContent.selectedGame} onGameClick={handleClickGame} onClickMechanic={handleClickList} onClickCategory={handleClickList} onClickFamily={handleClickList}/>
      </main>
    )
  }
  if(mainContent.mainContent === "gameList" && mainContent.listType === "search"){
    return(
      <main>
        <SearchResult selectedGame={mainContent.selectedGame} onGameClick={handleClickGame} />
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
  if(mainContent.mainContent === "search"){
    return(
      <main>
        <SearchForm formSubmissionHandler={handleSearch}/>
      </main>
    )
  }
  
  
}

export default MainContent;