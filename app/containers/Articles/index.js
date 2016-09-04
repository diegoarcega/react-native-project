import React, { Component } from 'react';
import Articles from '../../components/Articles';
import request from 'axios';

export default class ArticlesContainer extends Component{
  componentWillMount(){
    request('https://braziljs.org/api/list/articles')
    .then(data => {
      console.log(data.data)
      this.setState({
        articles: data.data.articles,
      })
    });

    this.setState({
      articles: []
    });
  }
  render(){
    return <Articles articles={this.state.articles} />
  }
}
