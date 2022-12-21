import React from 'react';
import Navigation from './Navigation';
import { IconStar, IconStarHalf, IconUsers, IconHourglass, IconWeight, IconMoodKid, IconBookmark } from '@tabler/icons';
import * as root from './../../public/root.jpg';
import gameReducer from "../reducers/gameReducer";
import gameListReducer from '../reducers/gameListReducer';
import { getGameListFail, getGameListSuccess, getGameFail, getGameSuccess } from "../actions/index";
import bggApiToJson from 'bgg-api-to-json';



interface GameDetailProps{
  selectedGame: string
  onGameClick: Function,
  onClickCategory: Function,
  onClickMechanic: Function
}

const initialGameState = {
  isLoaded: false,
  game: [],
  error: null
}

const initialListState = {
  isLoaded: false,
  gameList: [],
  error: null
}



const GameDetail:React.FC<GameDetailProps> = (props) => {

  const[state, dispatchGame] = React.useReducer(gameReducer, initialGameState);
  // const[listState, dispatchList] = React.useReducer(gameListReducer, initialListState);

  var parseString = require('xml2js').parseString;

  

  React.useEffect(() => {

    bggApiToJson.thing({id:parseInt(props.selectedGame), stats:true})
      .then(res => {
        var result = res;
        console.log(result);

        const a1 = Object.values(result)[1];
        const a2 = Object.values(a1);
        console.log(a2[0]);
        const action = getGameSuccess(a2[0]);
        dispatchGame(action);
      })
    // fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${props.selectedGame}`)
    //   .then(res => {
    //     var result = res;
    //     console.log(result)
    //     var text = result.text();
    //     console.log(text)
    //     return text;
    //   })
    //   .then(str => {
    //     console.log(str)
    //     var xml = new window.DOMParser().parseFromString(str, "text/xml")
    //     console.log("xml");
    //     console.log(xml)
    //     return xml
    //   }).then(xml => {
    //     var xmlStr = (new XMLSerializer()).serializeToString(xml);
    //     var json;
    //     parseString(xmlStr, function(err, result){
    //       console.log(xmlStr);
    //       console.log(result.items.item[0]);
    //       json = result;
    //     })
    //     return json;
    //   }).then( json => {
    //     var values = Object.values(json);
    //     console.log(values);
    //     return values;
    //   }).then(jsonRes => {
    //     const action = getGameSuccess(jsonRes);
    //     dispatchGame(action);
    //   })

  }, [props.selectedGame]);

  const {error, isLoaded, game} = state;
  
  if (error) {
    return <p>Error: {error}</p>
  } else if (!isLoaded) {
    return <p>...Loading...</p> 
  } else {
    return(
      <main>
      <div className="game--detail--cover">
        <div className="cover--buttons">
          {props.selectedGame}
          <IconStar />
          <IconBookmark />
        </div>
        <img src={game.image_uri} className="game--detail--image" alt="" />
        <p className="game--detail--title">{game.name}</p>
      </div>
      <div className="game--detail--summary">
        <div className="summary--grid">
            <div className="summary--plays">Plays: 5</div>
            <div className="summary--rating">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStarHalf />
            </div>
            <div className="summary--age">
              <IconMoodKid />
              <span className="age--text">{game.min_age}</span>
            </div>
            <div className="summary--players">
                <IconUsers /> 
                <span className="players--text">{game.min_players}-{game.max_players}</span>
            </div>
            <div className="summary--playtime">
              <IconHourglass />
              <span className="playtime--text">{game.min_play_time}-{game.max_play_time}</span>
            </div>
            <div className="summary--weight">
              <IconWeight />
              <span className="weight--text">{game.stats.avg_weight} </span>
            </div>
        </div>
        <div className="summary--slider game--detail--categories">
          {game.categories.map((category) => 
          <div onClick={props.onClickCategory(category.id)} key={category.id}>{category.value}</div>
          )}
        </div>
        <div className="summary--slider game--detail--mechanics">
          {game.mechanics.map((mechanic) => 
            <div onClick={props.onClickMechanic(mechanic.id)} key={mechanic.id}>{mechanic.value}</div>
          )}
        </div>
      </div>

      <div className="game--detail--description">
        <h3>Description</h3>
        <p className="description--text">{game.description}</p>
      </div>
    </main>
    )
  }

  // return (
  //   <main>
  //     <div className="game--detail--cover">
  //       <div className="cover--buttons">
  //         {props.selectedGame}
  //         <IconStar />
  //         <IconBookmark />
  //       </div>
  //       <img src={root} className="game--detail--image" alt="" />
  //       <p className="game--detail--title">Root (2018)</p>
  //     </div>
  //     <div className="game--detail--summary">
  //       <div className="summary--grid">
  //           <div className="summary--plays">Plays: 5</div>
  //           <div className="summary--rating">
  //             <IconStar /><IconStar /><IconStar /><IconStar /><IconStarHalf />
  //           </div>
  //           <div className="summary--age">
  //             <IconMoodKid />
  //             <span className="age--text">10+</span>
  //           </div>
  //           <div className="summary--players">
  //               <IconUsers /> 
  //               <span className="players--text">2-4</span>
  //           </div>
  //           <div className="summary--playtime">
  //             <IconHourglass />
  //             <span className="playtime--text">60-90min</span>
  //           </div>
  //           <div className="summary--weight">
  //             <IconWeight />
  //             <span className="weight--text">3.8/3.6</span>
  //           </div>
  //       </div>
  //       <div className="summary--slider game--detail--categories">
  //         <div className="category">Action / Movement Programming</div>
  //         <div className="category">Action Queue</div>
  //         <div className="category">Area Control</div>
  //         <div className="category">Dice Roldivng</div>
  //         <div className="category">Engine Building</div>
  //         <div className="category">Hand Management</div>
  //         <div className="category">Point to Point Movement</div>
  //         <div className="category">Race</div>
  //         <div className="category">Variable Player Powers</div>
  //       </div>
  //       <div className="summary--slider game--detail--mechanics">
  //       <div>Adventure</div>
  //       <div>Animals</div>
  //       <div>Asymmetric</div>
  //       </div>
  //     </div>

  //     <div className="game--detail--description">
  //       <h3>Description</h3>
  //       <p className="description--text">Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again.</p>
  //     </div>
  //   </main>
  // )
}

export default GameDetail;