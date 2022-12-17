import React from 'react';
import GameDetail from './GameDetail';
import SearchForm from './SearchForm';
import GameList from './GameList';


interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState();

  // const[gameList, setGameList] = React.useState(Object);


  // React.useEffect(() => {
  //   fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.geekdo.com/api/geekitem/linkeditems?linkdata_index=boardgame&objectid=1013&objecttype=property&showcount=25&sort=rank&subtype=boardgamecategory')}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setGameList(Object.keys);

  //     });

  // }, []);
  // console.log("game list" + gameList);

  return (
    <main>
      <GameList />
      {/* <GameDetail />
      <SearchForm /> */}
    </main>
  )
}

export default MainContent;