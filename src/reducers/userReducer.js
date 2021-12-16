import { ADD_USER_LIKE, GET_USER } from '../actions/userActions';

const inititalState = {};

export default function userReducer(state = inititalState, action) {
  if (action.type === GET_USER) {
    return action.payload;
  }
  if (action.type === ADD_USER_LIKE) {
    return state.map((user) => {
      if (user.id === action.payload.id) {
        user.likes = action.payload.likes;
      }
      return user;
    });
  }
  return state;
}
