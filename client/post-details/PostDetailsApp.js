import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Comment from './Comment';
import {Dropdown} from '../widget/Widget';

/**
 * POST DETAILS APP COMPONENT
 *
 * Properties:
 * - httpStatusCode        {Number}   api response status code
 * - post                  {Object}   post details data
 * - comments              {Array}    comments of the post
 * - sortSelection         {String}   the selected sorting criteria
 * - onPostDetailsDataLoad {Function} invoked to load data after this component
 *                                    is mounted
 * - onSortSelectionChange {Function} invoked if sort selection is changed
 */
class PostDetailsApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
  }

  handleSelectionChange(selection) {
    this.props.onSortSelectionChange(selection, this.props.comments)
  }

  componentDidMount() {
    this.props.onPostDetailsDataLoad(this.props.id);
  }

  render() {
    const {comments, post, httpStatusCode, sortSelection} = this.props;
    const postComments = comments.map(comment => {
      return <Comment data={comment} key={comment.data.id} />;
    });
    const options = [
      {text: 'Best', value: 'ups'},
      {text: 'New', value: 'created'},
      {text: 'Upvote Ratio', value: 'upvote_ratio'},
    ];

    return (
      (httpStatusCode === 200) && post ?
      <div id="post-details-page">
        <Post data={post} />

        <div className="sorting">
          <p>{post.num_comments} Comment</p>
          Sorted by:
          <Dropdown
            options={options}
            placeholder="-- select an option --"
            onChange={this.handleSelectionChange}
          />
        </div>
        {postComments}
      </div> : (
        httpStatusCode === 404 ? <div>Post Details Data Is Not Available</div> :
        <div>Loading !</div>
      )
    );
  }
}

PostDetailsApp.propTypes = {
  httpStatusCode: PropTypes.any,
  post: PropTypes.object,
  comments: PropTypes.array.isRequired,
  sortSelection: PropTypes.string.isRequired,
  onPostDetailsDataLoad: PropTypes.func.isRequired,
  onSortSelectionChange: PropTypes.func.isRequired,
};

export default PostDetailsApp;