import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AppName</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 0,
    backgroundColor: '#ffeb3b',
    paddingTop: 30,
    paddingBottom: 15,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginLeft: 15
  }
})

export default Header;
