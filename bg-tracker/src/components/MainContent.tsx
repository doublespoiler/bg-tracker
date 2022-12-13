import React from 'react';
import Navigation from './Navigation';
import { IconStar, IconStarHalf, IconUsers, IconHourglass, IconWeight, IconMoodKid  } from '@tabler/icons';
import root from './../../public/root.jpg';
import Sdivder from './Sdivder';


interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState();

  return (
  <main>
    <div className="game--detail--cover">
      <img src={root} className="game--detail--image" alt=""/>
      <p className="game--detail--title">Root (2018)</p>
    </div>
    <div className="game--detail--summary">
      <div className="summary--line">
        <div className="summary--plays">Plays: 5</div>
        <div className="summary--rating">
          <IconStar /><IconStar /><IconStar /><IconStar /><IconStarHalf />
        </div>
        <div className="summary--age">
          <IconMoodKid />
          <span className="age--text">10+</span>
        </div>
      </div>
      <div className="summary--line">
        <div className="summary--players">
          <IconUsers /> 
          <span className="players--text">2-4</span>
        </div>
        <div className="summary--playtime">
          <IconHourglass />
          <span className="playtime--text">60-90 minutes</span>
        </div>
        <div className="summary--weight">
          <IconWeight />
          <span className="weight--text">3.8/3.6</span>
        </div>
      </div>
        <div className="summary--slider game--detail--categories">
          <div className="category">Action / Movement Programming</div>
          <div className="category">Action Queue</div>
          <div className="category">Area Control</div>
          <div className="category">Dice Roldivng</div>
          <div className="category">Engine Building</div>
          <div className="category">Hand Management</div>
          <div className="category">Point to Point Movement</div>
          <div className="category">Race</div>
          <div className="category">Variable Player Powers</div>
        </div>
      <div className="summary--slider game--detail--mechanics">
        <div>Adventure</div>
        <div>Animals</div>
        <div>Asymmetric</div>
      </div>
    </div>
  </main>
  )
}

export default MainContent;