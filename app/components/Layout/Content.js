import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Content extends Component{
  render(){
    return (
      <View style={styles.content}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    backgroundColor: '#222'
  }
});

export default Content;
