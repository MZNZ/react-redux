import React from 'react';
import PropTypes from 'prop-types';
import {CommonUtils} from '../util/Util';

/**
 * SUB COMMENT COMPONENT
 *
 * Properties:
 * - comments {Array} comments of the post
 */
const SubComment = ({
  comments,
}) =>
  <React.Fragment>
    {
      comments.map(comment => {
        const {id, author, score, created, body_html, replies} = comment.data;
        return (
          <div className="replies" key={id}>
            <strong>{author}</strong>  {score} point  <span className="small-grey">{(new Date(created * 1000)).toLocaleString()}</span>
            <div className="reply">
              <p dangerouslySetInnerHTML=
                {{__html: CommonUtils.htmlDecode(body_html)}}>
              </p>
              {replies ? <SubComment comments={replies.data.children}/> : null}
            </div>
          </div>
        );
      })
    }
  </React.Fragment>;

SubComment.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default SubComment;
