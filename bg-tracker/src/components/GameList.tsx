import React from "react";
import gamesData from './../gamesData.js'

interface GameListProps{

}

const GameList:React.FC<GameListProps> = (props) => {


  const[gameList, setGameList] = React.useState(gamesData);


  React.useEffect(() => {


    var result = fetch("https://crossorigin.me/https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=1013&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory")
      .then(res => res.json())
      .then(data => setGameList(data));
      console.log(result);
      console.log(gameList);
  }, []);
  
  return(
    // <div className="game-list">
    //   {gameList.map((game) => 
    //   <div>
    //     {game.name}
    //   </div>
    //   )}
    // </div>
    <div>
      <p>Game List</p>
    </div>
  )
}

export default GameList;