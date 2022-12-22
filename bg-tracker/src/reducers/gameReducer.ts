import * as c from '../actions/ActionTypes'


const gameReducer = (state, action) => {
  switch(action.type){
    case c.GAME_GET_SUCCESS:
      console.log("dispatching");
      console.log(action.game);
      return{
        ...state,
        isLoaded: true,
        game: action.game
      };
    case c.GAME_GET_FAIL:
      return{
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

export default gameReducer;