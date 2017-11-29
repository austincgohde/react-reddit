import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from './actions/posts';
import { getComments } from './actions/comments';

import Nav from './components/Nav';
import Main from './components/Main';

export class App extends Component {

componentDidMount() {
  this.props.getPosts();
  this.props.getComments();
}

  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return{
    getPosts: bindActionCreators(getPosts, dispatch),
    getComments: bindActionCreators(getComments, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
