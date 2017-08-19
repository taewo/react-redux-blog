import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          go back
        </Link>
        PostNew!
      </div>
    )
  }
}

export default PostsNew;
