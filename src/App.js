import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPosts } from './actions/users';
import { bindActionCreators } from 'redux';

import Nav from './components/Nav';
import Main from './components/Main';

export class App extends Component {

componentDidMount() {
  this.props.getPosts();
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
    getPosts: bindActionCreators(getPosts, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
