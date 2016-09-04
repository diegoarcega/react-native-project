import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Article from '../Article';

export default class Articles extends Component {
  render(){
    return (
      <View>
        {this.props.articles.map((article, index) => (
          <Article styles={styles.article} key={index} image={article.img} title={article.title} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    marginBottom: 30
  }
});
