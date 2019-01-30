import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainPage from './src/pages/MainPage'

export interface Props {

}

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <View style={{ height: 200, width: '100%' }} />
        <MainPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
