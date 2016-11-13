import React, { Component } from 'react';
import { View, Dimensions, ListView, StyleSheet } from 'react-native';
import Article from '../Article';

export default class Articles extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }
  componentWillReceiveProps(nextProps){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(nextProps.articles)
    };
  }
  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={article => <Article styles={styles.article} image={article.img} title={article.title} />} />
    );
  }
}

const styles = StyleSheet.create({
  article: {
    marginBottom: 30
  }
});
