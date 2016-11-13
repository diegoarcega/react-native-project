import React, { Component } from 'react';
import { Dimensions, Animated, View, StyleSheet, Image } from 'react-native';
import Title from './Title';

export default class Article extends Component {

  componentWillMount(){
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(-Dimensions.get('window').width)
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.animatedValue1,
        {
          toValue: 1,
          duration: 300,
        }
      ),
      Animated.timing(
        this.animatedValue2,
        {
          toValue: 0,
          duration: 1000,
        }
      )
    ]).start()
  }

  render(){
    const animatedStyles = {
      opacity: this.animatedValue1,
      transform: [{
        translateX: this.animatedValue2,
      }]
    }
    return (
      <Animated.View style={[this.props.styles, animatedStyles]}>
        <Image style={styles.articleImage} source={{uri: 'https://braziljs.org' + this.props.image}} />
        <Title text={this.props.title} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  articleImage:{
    flex: 1,
    borderRadius: 10,
    height: 90,
  }
});
