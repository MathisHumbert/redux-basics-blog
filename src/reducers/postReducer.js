import { GET_POSTS } from '../actions/postAction';

// const inititalState = {
//   posts: [],
// };
const inititalState = {};

export default function postReducer(state = inititalState, action) {
  if (action.type === GET_POSTS) {
    return action.payload;
  }
  return state;
}
