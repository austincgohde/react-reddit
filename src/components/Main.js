import React, { Component } from 'react';

import PostCompose from './PostCompose';

class Main extends Component {

  state = {
    formToggle: false
  }

  handleFormToggle = () => {
    this.setState({ formToggle: !this.state.formToggle})
  }

  render () {

    let formToggler = this.state.formToggle ? <PostCompose /> : null
    return (
      <div>
        <main className="container">
          <div className="pull-right">
            <p><a
                className="btn btn-info"
                onClick={this.handleFormToggle}
                >New Post</a></p>
          </div>
          <ul className="nav nav-pills">
            <li role="presentation" className="active">
              <input type="search" className="form-control input-sm search-form" placeholder="Filter"/>
            </li>
            <div className="form-inline">
              <label htmlFor="sort">  Sort by </label>
              <select className="form-control" id="sort">
                <option>Some text</option>
                <option>Some text</option>
              </select>
            </div>
          </ul>
          {formToggler}
          <div className="row">
            <div className="col-md-12">

              <div className="well">
                <div className="media-left">
                  <img className="media-object" alt="explanation"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    Some Text
                    |
                    <a><i className="glyphicon glyphicon-arrow-up"></i></a>
                    <a><i className="glyphicon glyphicon-arrow-down"></i></a>
                    10
                  </h4>
                  <div className="text-right">
                    Some Author
                  </div>
                  <p>
                    Some text
                  </p>
                  <div>
                    Some time ago
                    |
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
        </main>
      </div>
    )
  }
}

export default Main;
