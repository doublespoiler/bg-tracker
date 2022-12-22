import React from "react";
import gamesData from './../gamesData.js'
import gameListReducer from "../reducers/gameListReducer";
import { getGameListFail, getGameListSuccess } from "../actions/index";
import Game from "./Game";

interface GameListProps{
  selectedList: string,
  onGameClick: Function
  listType: string
}

const initialState = {
  isLoaded: false,
  gameList: [],
  listType: null,
  error: null
};


const GameList:React.FC<GameListProps> = (props) => {

  const[state, dispatch] = React.useReducer(gameListReducer, initialState);
  React.useEffect(() => {
    if(props.selectedList){
      console.log('list type')
      console.log(props.listType);
      const objectType = props.listType === "boardgamefamily" ? "family" : "property";
      console.log(objectType);
      fetch(`https://api.codetabs.com/v1/proxy?quest=https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=${props.selectedList}&objecttype=${objectType}&showcount=25&sort=rank&subtype=${props.listType}`)
      .then(res => {
        if(!res.ok){
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          console.log(res);
          return res.json();
        }
      })
      .then((jsonRes) => {
        console.log('a');
        console.log(jsonRes.items)
        const action = getGameListSuccess(jsonRes.items);
        dispatch(action);
      })
      .catch((error) => {
        const action = getGameListFail(error.message);
        dispatch(action);
      })
    }
  }, [props.selectedList, props.listType])

  const {error, isLoaded, gameList} = state;

  if (error) {
    return <p>Error: {error}</p>;
  } else if (!isLoaded) {
    return <p>...Loading...</p>;
  } else {
    return(
      <div className="game--list">
        {gameList.map((game) => 
          <Game thisGame={game} key={game.objectid} onClick={props.onGameClick}/>
        )}
      </div>
    )
  }
}

export default GameList;