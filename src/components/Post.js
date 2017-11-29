import React, { Component } from 'react'

class Post extends Component {
  render () {

    let {
      author,
      title,
      content,
      created_at,
      image_url,
      votes
    } = this.props.post

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
              <div className="row">
                <div className="col-md-offset-1">
                  <hr/>
                  <p>
                    Comment text
                  </p>
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
        </div>
      </div>
    )
  }
}

export default Post
