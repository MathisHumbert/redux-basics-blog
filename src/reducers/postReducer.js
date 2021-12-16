import { GET_POSTS } from '../actions/postAction';

const inititalState = {
  posts: [],
};

export default function postReducer(state = inititalState, action) {
  if (action.type === GET_POSTS) {
    return { posts: action.payload };
  }
  return state;
}
