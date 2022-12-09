import React from 'react';

export default function ClockIcon(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="13" r="7" />
      <polyline points="12 10 12 13 14 13" />
      <line x1="7" y1="4" x2="4.25" y2="6" />
      <line x1="17" y1="4" x2="19.75" y2="6" />
    </svg>
  )
}