export const CHANGE_POST_DETAILS = 'CHANGE_POST_DETAILS';
export const CHANGE_POST_COMMENTS = 'CHANGE_POST_COMMENTS';
export const CHANGE_POST_COMMENTS_SORT_SELECTION =
  'CHANGE_POST_COMMENTS_SORT_SELECTION';
export const CHANGE_HTTP_STATUS_CODE = 'CHANGE_HTTP_STATUS_CODE';

export const changePostDetails = (postDetails) => {
  return {
    type: CHANGE_POST_DETAILS,
    payload: postDetails,
  };
};

export const changePostComments = (comments) => {
  return {
    type: CHANGE_POST_COMMENTS,
    payload: comments,
  };
};

export const changePostCommentsSortSelection = (selection) => {
  return {
    type: CHANGE_POST_COMMENTS_SORT_SELECTION,
    payload: selection,
  };
};

export const changeHttpStatusCode = (httpStatusCode) => {
  return {
    type: CHANGE_HTTP_STATUS_CODE,
    payload: httpStatusCode ,
  };
};
