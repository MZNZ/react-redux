import {
  CHANGE_POSTS_DATA,
  CHANGE_HTTP_STATUS_CODE,
 } from "./PostsActions";

const postsInitalState = {
  httpStatusCode: null,
  posts: [],
};

export const posts = (state = postsInitalState, action) =>
{
  const payload = action.payload;
  switch(action.type) {
  case CHANGE_POSTS_DATA:
    return {...state, posts: payload};
  case CHANGE_HTTP_STATUS_CODE:
    return {...state, httpStatusCode: payload};
  default:
    return state;
  }
};