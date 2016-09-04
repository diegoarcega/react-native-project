import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/Layout/Header';
import Home from './screens/home';



export default class AppContainer extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Home/>
      </View>
    );

  }
}
