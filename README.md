<!-- omit from toc -->
# Board Game Collection App (TBA)
<!-- omit from toc -->
## By Skylan Lew
<!-- omit from toc -->
### Epicodus C#/React Capstone and beyond
<!-- omit from toc -->
## Table of Contents

- [Technologies Used](#technologies-used)
- [Description](#description)
- [Setup/Installation](#setupinstallation)
  - [Requires](#requires)
  - [Tested/Developed with](#testeddeveloped-with)
  - [Download/Run Instructions](#downloadrun-instructions)
- [Known Bugs](#known-bugs)
- [License](#license)

## Technologies Used

- Typescript/Javacript
- React
- SASS/CSS
- HTML
- Parcel
- [boardgamegeekclient](https://www.npmjs.com/package/boardgamegeekclient)

## Description

An application for (soon) tracking board games.

Currently gets games and linked item lists (categories, mechanics, family), and information from BoardGameGeek.

Allows the user to search for a game by name, which returns a list, and can view details for any of the games on the list, both using the official XML API 2. The user may also access linked item lists for category, mechanics, and family, the call for which is made to BGG's internal API.

Fetches from BGG XML API2, and BGG's internal API, for demonstration purposes only.

## Setup/Installation

### Requires

- node.js
- npm
- git

### Tested/Developed with

- node.js v16.16.0
- npm 8.11.0
- Chrome
- Firefox
- Safari iPhone

### Download/Run Instructions

  step 1 - download `git clone https://github.com/doublespoiler/bg-tracker.git`

  step 1 - Navigate to main folder `cd bg-tracker`

  step 2 - Install dependencies `npm install`

  step 3 - Run Dev Environment `npm run dev`

  step 4 - run build for production `npm run build`

## Known Bugs

- Need error handling for failed some API calls
- Uses BGG's internal API, which probably shouldn't happen.

## TODO

- Get images for search results
- Paginate lists
- Add more search functionality
- Animations
- Add user collection tracking
- Add user plays tracking
  - Calendar view
  - Add players
  - Save scores
- Add game score trackers

## License

[MIT](https://choosealicense.com/licenses/mit/) (c) 2022 Skylan Lew
