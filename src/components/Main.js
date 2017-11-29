import React, { Component } from 'react';
import { connect } from 'react-redux';


import PostCompose from './PostCompose';
import Post from './Post';

class Main extends Component {

  state = {
    formToggle: false
  }

  handleFormToggle = () => {
    this.setState({ formToggle: !this.state.formToggle})
  }

  render () {

    let formToggler = this.state.formToggle ? <PostCompose /> : null

    let postList = this.props.posts.map(post => <Post key={post.id} post={post} />)

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
          {postList}
        </main>
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    posts: store.posts
  }
}

export default connect(mapStateToProps, null)(Main);
