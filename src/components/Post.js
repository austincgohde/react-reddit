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

    let comment = this.props.comments.map((c) => {
      if(c.post_id === id) {
        return <Comment key={c.id} comment={c}/>
      }
    })

    let commentCounter = this.props.comments.filter(c => c.post_id === id);

    let counterText = commentCounter.length !== 1 ? "Comments" : "Comment";

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
                  {`${commentCounter.length} ${counterText}`}
                </a>
              </div>
              {comment}
              <form className="form-inline">
                <div className="form-group">
                  <input className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary"/>
                </div>
              </form>
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
