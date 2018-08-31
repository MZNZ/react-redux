import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

/**
 * POST APP COMPONENT
 *
 * Properties:
 * - httpStatusCode     {Number}   api response status code
 * - posts              {Array}    the list of post
 * - onPostListDataLoad {Function} invoked to load data after this component
 *                                 is mounted
 */
class PostsApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onPostListDataLoad();
  }

  render() {
    const {httpStatusCode, posts} = this.props;
    return (
      httpStatusCode === 200 ?
      <div id="posts-page">
        <h1>Post List</h1>
        {
          posts.map(post => {
            const {id, title, domain, num_comments} = post.data;
            return (
              <div className="posts" key={id}>
                <div className="post-summary">
                  <Link to={`/post/${id}`} className="title-domain-inline">{title}</Link>
                  <p className="small-grey title-domain-inline"> {domain}</p>
                  <div>{num_comments} comment</div>
                </div>
              </div>
            );
          })
        }
      </div> : (
        httpStatusCode === 404 ?
        <div> Data Not Available! </div> : <div>Loading</div>
      )
    );
  }
}

PostsApp.propTypes = {
  httpStatusCode: PropTypes.any,
  posts: PropTypes.array.isRequired,
  onPostListDataLoad: PropTypes.func.isRequired,
};

export default PostsApp;