import React from 'react';

export const Circle = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="44" height="44" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export const Triangle = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle" width="44" height="44" viewBox="0 0 24 24">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 9v2m0 4v.01" />
      <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
    </svg>
  );
}