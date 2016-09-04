import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import Header from './components/Layout/Header';
import Home from './screens/home';

const store = configureStore();

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header/>
          <Home/>
        </View>
      </Provider>
    );

  }
}
