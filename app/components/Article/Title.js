import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Title extends Component {
  render(){
    return <Text style={styles.title}>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#ffeb3b',
    fontWeight: '800',
    fontSize: 17,
    marginTop: 4
  }
});
