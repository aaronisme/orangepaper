import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import MainPage from './src/pages/MainPage'

export interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <MainPage />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white', 
    marginHorizontal: 16
  }
});
