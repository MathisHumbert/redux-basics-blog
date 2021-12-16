import { GET_USER } from '../actions/userActions';

const inititalState = {};

export default function userReducer(state = inititalState, action) {
  if (action.type === GET_USER) {
    return action.payload;
  }
  return state;
}
