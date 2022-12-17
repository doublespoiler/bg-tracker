import * as c from './ActionTypes';

export const getGameListSuccess = (gameList) => ({
  type: c.GAME_LIST_GET_SUCCESS,
  gameList
});

export const getGameListFail = (error) => ({
  type: c.GAME_LIST_GET_FAIL,
  error
});