import React from 'react';
import Navigation from './Navigation';
import { IconStar, IconStarHalf, IconUsers, IconHourglass, IconWeight, IconMoodKid, IconBookmark } from '@tabler/icons';
import gameReducer from "../reducers/gameReducer";
import gameListReducer from '../reducers/gameListReducer';
import { getGameListFail, getGameListSuccess, getGameFail, getGameSuccess } from "../actions/index";
import bggApiToJson from 'bgg-api-to-json';
import { BggClient } from 'boardgamegeekclient';


interface GameDetailProps{
  selectedGame: string
  onGameClick: Function,
  onClickCategory: Function,
  onClickMechanic: Function,
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
    const client = BggClient.Create();
    client.thing.query({ id:parseInt(props.selectedGame), stats:1})
    .then(res => {
      console.log("client");
      console.log(res[0])
      const action = getGameSuccess(res[0]);
      dispatchGame(action);
    })

      // bggApiToJson.thing({id:parseInt(props.selectedGame), stats:true})
      // .then(res => {
      //   var result = res;
      //   console.log(result);

      //   const a1 = Object.values(result)[1];
      //   const a2 = Object.values(a1);
      //   console.log(a2[0]);
      //   const action = getGameSuccess(a2[0]);
      //   dispatchGame(action);
      // })
      // .catch((error) => {
      //   const action = getGameFail(error.message);
      //   dispatchGame(action);
      // })
  }, [props.selectedGame]);

  const {error, isLoaded, game} = state;
  
  if (error) {
    const tmp = props.selectedGame;
    props.selectedGame = null;
    props.selectedGame = tmp;
    return <p>Error: {error}</p>
  } else if (!isLoaded) {
    return <p>...Loading...</p> 
  } else {

    var mechanics = [];
    var categories = [];
    var family = [];
    
    game.links.forEach((link)=>{
      if(link.type==="boardgamecategory"){
        categories.push(`${link.id}: ${link.value}`)
      } else if (link.type==="boardgamemechanic"){
        mechanics.push(`${link.id}: ${link.value}`)
      } else if (link.type === "boardgamefamily"){
        family.push(`${link.id}: ${link.value}`)
      } else {
        return;
      }
    })

    console.log(mechanics)



    return(
      <main>
      <div className="game--detail--cover">
        <div className="cover--buttons">
          {props.selectedGame}
          <IconStar />
          <IconBookmark />
        </div>
        <img src={game.image} className="game--detail--image" alt="" />
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
              <span className="age--text">{game.minage}</span>
            </div>
            <div className="summary--players">
                <IconUsers /> 
                <span className="players--text">{game.minplayers}-{game.maxplayers}</span>
            </div>
            <div className="summary--playtime">
              <IconHourglass />
              <span className="playtime--text">{game.minplaytime}-{game.maxplaytime}</span>
            </div>
            <div className="summary--weight">
              <IconWeight />
              <span className="weight--text">{game.statistics.ratings.averageweight} </span>
            </div>
        </div>
        <div className="summary--slider game--detail--categories">
          {game.links.map((link) =>
          link.type === "boardgamecategory" ? 
          <div onClick={() => {props.onClickCategory(link.id, "boardgamecategory")}} key={link.id}>{link.value}</div> : null
          )}
        </div>
        <div className="summary--slider game--detail--mechanics">
        {game.links.map((link) =>
          link.type === "boardgamemechanic" ? 
          <div onClick={() => {props.onClickCategory(link.id, "boardgamemechanic")}} key={link.id}>{link.value}</div> : null
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