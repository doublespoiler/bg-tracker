import React from 'react';

export const Clock = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width="44" height="44" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="13" r="7" />
      <polyline points="12 10 12 13 14 13" />
      <line x1="7" y1="4" x2="4.25" y2="6" />
      <line x1="17" y1="4" x2="19.75" y2="6" />
    </svg>
  )
}

export const Alarm:React.FC = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width="44" height="44" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  );
}

export const Hourglass:React.FC = () => {
  return( 
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass" width="44" height="44" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6.5 7h11" />
      <path d="M6.5 17h11" />
      <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
      <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
    </svg>
  );
}