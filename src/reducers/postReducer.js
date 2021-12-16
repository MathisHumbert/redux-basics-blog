import {
  ADD_POSTS,
  DELETE_POSTS,
  EDIT_POSTS,
  GET_POSTS,
} from '../actions/postAction';

// const inititalState = {
//   posts: [],
// };
const inititalState = {};

export default function postReducer(state = inititalState, action) {
  if (action.type === GET_POSTS) {
    console.log(action.payload);
    return action.payload;
  }
  if (action.type === ADD_POSTS) {
    return [action.payload, ...state];
  }
  if (action.type === EDIT_POSTS) {
    console.log(action.payload);
    let tempState = state.map((post) => {
      if (post.id === action.payload.id) {
        post.content = action.payload.content;
      }
      return post;
    });
    return tempState;
  }
  if (action.type === DELETE_POSTS) {
    return state.filter((item) => item.id !== action.payload.postId);
  }

  return state;
}
