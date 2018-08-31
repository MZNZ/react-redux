import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsPage from './PostsPage';
import PostDetailsPage from './PostDetailsPage';
import './Application.less';

/**
 * Application COMPONENT (PRESENTATION)
 *
 * Properties:
 * - store {ReduxStore} redux store instance
 *
 * @return {Dom} Application root dom element
 */
export const Application = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={PostsPage} exact/>
          <Route path="/post/:postId" component={PostDetailsPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

Application.propTypes = {
  store: PropTypes.object.isRequired,
};
