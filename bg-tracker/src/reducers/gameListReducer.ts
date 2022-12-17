import * as c from '../actions/ActionTypes'

const gameListReducer = (state, action) => {
  switch(action.type){
    case c.GAME_LIST_GET_SUCCESS:
      return{
        ...state,
        isLoaded: true,
        gameList: action.gameList
      };
    case c.GAME_LIST_GET_FAIL:
      return{
        ...state,
        isLoaded: true,
        error: action.error
      };
    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

export default gameListReducer;