import {connect} from 'react-redux';
import * as reducers from './PostDetailsReducers';
import * as actions from './PostDetailsActions';
import PostDetailsApp from './PostDetailsApp';

export const mapStateToPropsPostDetailsApp = (state) => {
  const {
    post,
    comments,
    sortSelection,
    httpStatusCode,
  } = state.postDetails;
  return {
    post,
    comments,
    sortSelection,
    httpStatusCode,
  };
};

export const mapDispatchToPropsPostDetailsApp = (dispatch) => {
  return {
    onPostDetailsDataLoad: (postId) => {
      const as = async () => {
        const response = await fetch(`https://www.reddit.com/r/reactjs/${postId}.json`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });
        const httpStatusCode = response.status;
        if (httpStatusCode === 200) {
          const postDtailsData = await response.json();
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
          dispatch(actions.changePostDetails(postDtailsData[0].data.children[0].data));
          dispatch(actions.changePostComments(postDtailsData[1].data.children));
        } else {
          dispatch(actions.changeHttpStatusCode(httpStatusCode));
        }
      };
      as();
    },
    onSortSelectionChange: (selection, comments) => {
      let resortedComments = [];

      switch(selection) {
        case 'ups':
        case 'created':
          resortedComments = comments.sort((a, b) => {
            return b.data[selection] - a.data[selection];
          });
          dispatch(actions.changePostComments(resortedComments));
          dispatch(actions.changePostCommentsSortSelection(selection));
          break;
        case 'upvote_ratio':
          resortedComments = comments.sort((a, b) => {
            return ((b.data.ups) / (b.data.ups + b.data.downs)) - ((a.data.ups) / (a.data.ups + a.data.downs));
          });
          dispatch(actions.changePostComments(resortedComments));
          dispatch(actions.changePostCommentsSortSelection(selection));
          break;
        default:
          break;
      }
    }
  };
};

const PostDetailsAppContainer = connect(
  mapStateToPropsPostDetailsApp,
  mapDispatchToPropsPostDetailsApp,
)(PostDetailsApp);

export {
  PostDetailsApp,
  PostDetailsAppContainer,
  reducers,
  actions,
}