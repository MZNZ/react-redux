import React from 'react';
import PropTypes from 'prop-types';
import SubComment from './SubComment';
import {CommonUtils} from '../util/Util';

/**
 * COMMENT COMPONENT
 *
 * Properties:
 * - data {Array} an object containing comment information
 */
const Comment = ({data}) => {
  const {author, score, created, body_html, replies} = data.data;
  return (
    <div className="comments">
      <div className="comment">
        <strong>{author}</strong>  {score} point  <span className="small-grey">
          {(new Date(created * 1000)).toLocaleString()}</span>
        <div>
          <p dangerouslySetInnerHTML=
            {{__html: CommonUtils.htmlDecode(body_html)}}>
          </p>
          {replies ? <SubComment comments={replies.data.children}/> : null}
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Comment;