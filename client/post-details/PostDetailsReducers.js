import {
  CHANGE_POST_DETAILS,
  CHANGE_POST_COMMENTS,
  CHANGE_POST_COMMENTS_SORT_SELECTION,
  CHANGE_HTTP_STATUS_CODE,
 } from "./PostDetailsActions";

const postDetailsInitalState = {
  httpStatusCode: null,
  post: null,
  comments: [],
  sortSelection: '',
};

export const postDetails = (state = postDetailsInitalState, action) =>
{
  const payload = action.payload;
  switch(action.type) {
  case CHANGE_POST_DETAILS:
    return {...state, post: payload};
  case CHANGE_POST_COMMENTS:
    return {...state, comments: payload};
  case CHANGE_POST_COMMENTS_SORT_SELECTION:
    return {...state, sortSelection: payload};
  case CHANGE_HTTP_STATUS_CODE:
    return {...state, httpStatusCode: payload};
  default:
    return state;
  }
};