import React from 'react';
import PropTypes from 'prop-types';
import {CommonUtils} from '../util/Util';

/**
 * POST COMPONENT
 *
 * Properties:
 * - data {Array} an object containing post information
 */
const Post = ({data}) => {
  const {title, domain, created, author, selftext_html} = data;
  return (
    <div className="post">
      <h1 className="title-domain-inline">{title}</h1>
      <p className="title-domain-inline small-grey">{domain}</p>
      <div className="post-body">
        <span className="small-grey">
          Created on {(new Date(created * 1000)).toLocaleString()}
        </span> by <strong>{author}</strong>
      </div>
      <div className="post-body"
        dangerouslySetInnerHTML=
          {{__html: CommonUtils.htmlDecode(selftext_html)}}
      ></div>
    </div>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;