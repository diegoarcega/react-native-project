import React, { Component } from 'react';
import Content from '../../components/Layout/Content';
import ArticlesContainer from '../../containers/Articles';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Home extends Component{
  render(){
    return (
      <Content>
        <Text style={styles.introText}>Hi, please check all of the articles below:</Text>
        <ArticlesContainer />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  introText: {
    marginBottom: 20,
    color: '#f5efc2'
  }
})
export default Home;
