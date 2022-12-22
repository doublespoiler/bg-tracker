import React from "react";
import { BggClient } from 'boardgamegeekclient';
import gameListReducer from "../reducers/gameListReducer";
import { getGameListFail, getGameListSuccess} from "../actions/index";
import Game from "./Game";


interface SearchResultProps{
  onGameClick: Function,
  selectedGame: string
}

const initialState = {
  isLoaded: false,
  gameList: [],
  error: null
}

const SearchResult:React.FC<SearchResultProps> = (props) => {


  const [state, dispatch] = React.useReducer(gameListReducer, initialState);

  React.useEffect(() => {
    const client = BggClient.Create();
    client.search.query({query:props.selectedGame})
    .then(res => {
      //TODO add error handling
      console.log(res[0]);
      console.log(res[0].items);
      const action = getGameListSuccess(res[0].items);
      dispatch(action);
    })
  }, [props.selectedGame])

  const {error, isLoaded, gameList} = state;

  if (error) {
    return <p>Error: {error}</p>;
  } else if (!isLoaded) {
    return <p>...Loading...</p>;
  } else {
    return(
      <div className="game--list">
        {gameList.map((game) => 
          <Game thisGame={game} key={game.id} onClick={props.onGameClick}/>
        )}
      </div>
    )
  }
}

export default SearchResult;