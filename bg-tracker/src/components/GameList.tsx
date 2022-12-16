import React from "react";

interface GameListProps{

}

const GameList:React.FC<GameListProps> = (props) => {

  const[gameList, setGameList] = React.useState();


  React.useEffect(() => {
    var result = fetch("https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=2827&objecttype=property&showcount=25&sort=rank&subtype=boardgamemechanic")
      .then(res => res.json())
      .then(data => setGameList(data.data.items));
    console.log(result);
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