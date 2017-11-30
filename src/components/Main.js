import React, { Component } from 'react';
import { connect } from 'react-redux';


import PostCompose from './PostCompose';
import Post from './Post';

class Main extends Component {

  state = {
    formToggle: false,
    titleFilter: "",
    sortBy: "votes"
  }

  handleFormToggle = () => {
    this.setState({ formToggle: !this.state.formToggle})
  }

  handleTitleSearch = (e) => {
    this.setState({ titleFilter: e.target.value })
  }

  handleSortBy = (e) => {
    this.setState({ sortBy: e.target.value })
  }

  render () {

    let {
      titleFilter,
      sortBy
     } = this.state;

    let formToggler = this.state.formToggle ? <PostCompose /> : null

    let titleSort = titleFilter !== ""
                 ? this.props.posts
                 .filter(post => post.title.startsWith(titleFilter))
                 : this.props.posts

    let sortList = sortBy === "date"
                 ? titleSort
                 .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                 : sortBy === "title"
                 ? titleSort
                 .sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)
                 : titleSort
                 .sort((a, b) => b.votes - a.votes)

    let postList = sortList.map(post => <Post key={post.id} post={post} />)

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
              <input
                type="search"
                className="form-control input-sm search-form"
                placeholder="Filter"
                value={this.state.titleFilter}
                onChange={this.handleTitleSearch}
                />
            </li>
            <div className="form-inline">
              <label htmlFor="sort">  Sort by </label>
              <select
                className="form-control"
                id="sort"
                onChange={this.handleSortBy}
                >
                <option>Select a filter</option>
                <option value="date">By Date</option>
                <option value="title">By Title</option>
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
