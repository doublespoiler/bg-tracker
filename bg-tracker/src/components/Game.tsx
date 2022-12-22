import React from 'react';
import { IconWeight } from '@tabler/icons';

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
  thumb: string,
  previewthumb: string
}

const Game:React.FC<GameProps> = (props) => {
  const thisGame = props.thisGame;
  console.log("game");
  console.log(thisGame);
  
  return(
    <div className="game--list--game" onClick={()=>props.onClick(thisGame.objectid)} 
    style={{
      backgroundImage: `url("${thisGame.images.previewthumb}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="game--list--content">
        <div className="game--list--game--thumb"> 
          <img src={thisGame.images.previewthumb} alt={thisGame.name} />
        </div>
        <div className="game--list--details">
          <div className="foo">          <p className="game--list--details--title">{thisGame.name}</p>
</div>
          <div className="game--list--details--weight"><IconWeight /><p>{thisGame.avgweight}</p></div>
        </div>
      </div>
      
    </div>
  )
}

export default Game;