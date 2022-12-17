import React from "react";
import gamesData from './../gamesData.js'
import gameListReducer from "../reducers/gameListReducer";
import { getGameListFail, getGameListSuccess } from "../actions/index";
interface GameListProps{

}

const initialState = {
  isLoaded: false,
  gameList: [],
  error: null
};


const GameList:React.FC<GameListProps> = (props) => {

  const[state, dispatch] = React.useReducer(gameListReducer, initialState);

  React.useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=2827&objecttype=property&showcount=25&sort=rank&subtype=boardgamemechanic')}`)
      .then(res => {
        if(!res.ok){
          throw new Error(`${res.status}: ${res.statusText}`);
        } else {
          return res.json();
        }
      })
      .then((jsonRes) => {
        const action = getGameListSuccess(Object.values(JSON.parse(jsonRes.contents))[0]);
        dispatch(action);
      })
      .catch((error) => {
        const action = getGameListFail(error.message);
        dispatch(action);
      })
  }, [])

  
function testCall(){
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=1013&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory')}`)
  .then(res => {
    if(!res.ok){
      throw new Error(`${res.status}: ${res.statusText}`);
    } else {
      return res.json();
    }
  })
  .then((jsonRes) => {
    const action = getGameListSuccess(Object.values(JSON.parse(jsonRes.contents))[0]);
    dispatch(action);
  })
  .catch((error) => {
    const action = getGameListFail(error.message);
    dispatch(action);
  })
}

function testCall2(){
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=2827&objecttype=property&showcount=25&sort=rank&subtype=boardgamemechanic')}`)
  .then(res => {
    if(!res.ok){
      throw new Error(`${res.status}: ${res.statusText}`);
    } else {
      return res.json();
    }
  })
  .then((jsonRes) => {
    const action = getGameListSuccess(Object.values(JSON.parse(jsonRes.contents))[0]);
    dispatch(action);
  })
  .catch((error) => {
    const action = getGameListFail(error.message);
    dispatch(action);
  })
}

  const {error, isLoaded, gameList} = state;

  if (error) {
    return <p>Error: {error}</p>;
  } else if (!isLoaded) {
    return <p>...Loading...</p>;
  } else {
    return(
      <div className="game--list">
        <button onClick={testCall}>click</button>
        <button onClick={testCall2}>click2</button>
        {gameList.map((game) => 
        <div className="game--list--game" key={game.objectid}>
          <img src={game.images.thumb} alt={game.name}></img>
          <div className="game--list--details">
            <p className="game--list--game--title">{game.name}</p>{game.avgweight}
          </div>
        </div>
        )}
      </div>
      // <div>
      //   <p>Game List</p>
      // </div>
    )
  }
}

export default GameList;