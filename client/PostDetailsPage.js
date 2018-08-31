import React from 'react';
import {PostDetailsAppContainer} from './post-details/PostDetails';
import './PostDetailsPage.less';

/**
 * POST DETAILS PAGE COMPONENT (PRESENTATION)
 *
 * @return {Dom} post details page dom element
 */
const PostDetailsPage = ({match}) => {
  return <PostDetailsAppContainer id={match.params.postId} />;
};

export default PostDetailsPage;
