import React, { Component } from 'react'
import { connect } from 'react-redux';

import Comment from './Comment';

class Post extends Component {
  render () {

    let {
      id,
      author,
      title,
      content,
      created_at,
      image_url,
      votes
    } = this.props.post

    console.log('Comments', this.props.comments)

    let comment = this.props.comments.map((c) => {
      if(c.post_id === id) {
        return <Comment key={c.id} comment={c}/>
      }
    })

    return (
      <div className="row">
        <div className="col-md-12">

          <div className="well">
            <div className="media-left">
              <img className="media-object" src={`${image_url}`} alt="explanation"/>
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                {title}
                <a><i className="glyphicon glyphicon-arrow-up"></i></a>
                <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                {votes}
              </h4>
              <div className="text-right">
                {author}
              </div>
              <p>
                {content}
              </p>
              <div>
                {created_at}
                <i className="glyphicon glyphicon-comment"></i>
                <a>
                  Some comments
                </a>
              </div>
              {comment}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    comments: store.comments
  }
}

export default connect(mapStateToProps, null)(Post)
