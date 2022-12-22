import React from 'react';
import { IconStar, IconStarHalf, IconUsers, IconHourglass, IconWeight, IconMoodKid, IconBookmark } from '@tabler/icons';
import gameReducer from "../reducers/gameReducer";
import gameListReducer from '../reducers/gameListReducer';
import { getGameListFail, getGameListSuccess, getGameFail, getGameSuccess } from "../actions/index";
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

  React.useEffect(() => {
    const client = BggClient.Create();
    client.thing.query({ id:parseInt(props.selectedGame), stats:1})
    .then(res => {
      console.log("client");
      console.log(res[0])
      const action = getGameSuccess(res[0]);
      dispatchGame(action);
    })

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

    return(
    <>
      <div className="game--detail--cover" 
        style={{
          backgroundImage: `url("${game.image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="game--detail--image">
          <div className="cover--buttons">
            {props.selectedGame}
            <IconStar />
            <IconBookmark />
          </div>
          <img src={game.image} alt="" />
        </div>
      </div>
      <div className="game--detail--summary" style={{
        backgroundImage: `url(${game.image})`}}>
        <p className="game--detail--title">{game.name}</p>
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
    </>
    )
  }
}

export default GameDetail;