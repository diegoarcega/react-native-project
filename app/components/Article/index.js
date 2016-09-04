import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Title from './Title';

export default class Article extends Component {
  render(){
    return (
      <View style={this.props.styles}>
        <Image style={styles.articleImage} source={{uri: 'https://braziljs.org' + this.props.image}} />
        <Title text={this.props.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  articleImage:{
    flex: 1,
    marginLeft: -15,
    marginRight: -15,
    height: 90,
  }
});
