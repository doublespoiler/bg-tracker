import React from 'react';

interface GameProps{
  thisGame: ThisGameProps
  onClick: Function
}

interface ThisGameProps{
  name: string,
  avgweight: string,
  images: ImageProps,
  objectid: string
}

interface ImageProps{
  thumb: string
  
}

const Game:React.FC<GameProps> = (props) => {
  const thisGame = props.thisGame;
  return(
    <div className="game--list--game">
      <div className="game--list--game--thumb"> 
        <img src={thisGame.images.thumb} alt={thisGame.name} />
      </div>
      <div className="game--list--details">
        <p className="game--list--game--title">{thisGame.name}</p>{thisGame.avgweight}
      </div>
    </div>
  )
}

export default Game;