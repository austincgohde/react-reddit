import React, { Component } from 'react';

class Comment extends Component {
  render () {

    return (
      <div className="row">
        <div className="col-md-offset-1">
          <hr/>
          <p>
            {this.props.comment.content}
          </p>
        </div>
      </div>
    )
  }
}

export default Comment
