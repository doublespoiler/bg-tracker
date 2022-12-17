import React from "react";
import gamesData from './../gamesData.js'

interface GameListProps{

}

const GameList:React.FC<GameListProps> = (props) => {


  const[gameList, setGameList] = React.useState([]);


  React.useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=1013&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory')}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        var values = Object.values(JSON.parse(data.contents))[0];
        setGameList(values as any);
      });

  }, []);
  console.log("game list " + typeof(gameList));
  console.log(gameList);
  //Object.keys returns just the names of the properties (items, itemdata, linkdata, config)
  //Object.entries returns the properties and their values as key-value pairs
  //Object.values returns only the values (what we want)
  // const arr = Object.values(gameList)[0];
  // console.log("arr ");
  // console.log(arr);

  return(
    <div className="game--list">
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

export default GameList;