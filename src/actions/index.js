import types from '../types'

const updateCurrentUser =(user)=>{
  return{
    type: types.UPDATE_CURRENT_USER,
    payload: user
  }
}

const createNewGame = (game) => {
  return {
    type: types.CREATE_NEW_GAME, 
    payload: game
  }
}
const updateUserAnswer = (answer) => {
  return {
    type: types.UPDATE_USER_ANSWER,
    payload: answer
  }
}


export {createNewGame, updateCurrentUser, updateUserAnswer}