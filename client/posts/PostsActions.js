export const CHANGE_POSTS_DATA = 'CHANGE_POSTS_DATA';
export const CHANGE_HTTP_STATUS_CODE = 'CHANGE_HTTP_STATUS_CODE';

export const changePostData = (posts) => {
  return {
    type: CHANGE_POSTS_DATA,
    payload: posts,
  };
};

export const changeHttpStatusCode = (httpStatusCode) => {
  return {
    type: CHANGE_HTTP_STATUS_CODE,
    payload: httpStatusCode ,
  };
};
