import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux/actions';
import Articles from '../../components/Articles';


class ArticlesContainer extends Component{
  componentWillMount(){
    this.props.actions.getAll()
  }
  render(){
    return <Articles articles={this.props.articles} />
  }
}

function mapStateToProps (state) {
	return state
}

function mapDispatchToProps (dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer)
