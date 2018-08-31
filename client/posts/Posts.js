import {connect} from 'react-redux';
import * as reducers from './PostsReducers';
import * as actions from './PostsActions';
import PostsApp from './PostsApp';

export const mapStateToPropsPostsApp = (state) => {
  const {
    posts,
    httpStatusCode,
  } = state.posts;
  return {
    posts,
    httpStatusCode,
  };
};

export const mapDispatchToPropsPostsApp = (dispatch) => {
  return {
    onPostListDataLoad: () => {
      const as = async () => {
        const response = await fetch('https://www.reddit.com/r/reactjs.json', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        const httpStatusCode = response.status;
        if (httpStatusCode === 200) {
          const postData = await response.json();
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
          dispatch(actions.changePostData(postData.data.children));
        } else {
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
        }
      };
      as();
    },
  };
};

const PostsAppContainer = connect(
  mapStateToPropsPostsApp,
  mapDispatchToPropsPostsApp,
)(PostsApp);

export {
  PostsApp,
  PostsAppContainer,
  reducers,
  actions,
}