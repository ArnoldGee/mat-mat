import {combineReducers} from 'redux';
import types from '../types';

const currentUserReducer = (currentUser = null, action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_USER:
      return action.payload;
    default:
      return currentUser;
  }
};

const usersReducer = (users = [], action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};

const gameReducer = (game = null, action) => {
  switch (action.type) {
    case types.CREATE_NEW_GAME:
      return action.payload;
    case types.UPDATE_USER_ANSWER:
      if (action.payload.toString().length > 3) {
        return game;
      }
      const {currentQuestion} = game;
      const newGame = {...game};
      newGame.questions[currentQuestion].answer = action.payload;
      return newGame;
    default:
      return game;
  }
};

export default combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  game: gameReducer,
});
