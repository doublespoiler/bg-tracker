import React from 'react';
import Navigation from './Navigation';

interface MainContentProps{
  
}

const MainContent:React.FC<MainContentProps> = (props) => {
  const [mainContent, setMainContent] = React.useState();
  return (
      <main>
          <h1>Reasons I'm excited to learn React</h1>
          <ul>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ul>
      </main>
  )
}

export default MainContent;