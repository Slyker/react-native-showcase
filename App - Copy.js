import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import FuncComp from './components/FuncComp.jsx';
import ClassComp from './components/ClassComp.jsx';
import UseTo from './components/UseTo.jsx';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default App = (props) => {
  const [test, setTest] = useState('before');
  const a = () => {
    if (true) {
      return (
        <UseTo
          class
          delay="2"
          cb={() => {
            console.log('test');
            setTest('after'); //working with classes
          }}>
          <View style={styles.container}>
            <Text style={styles.welcome}>useTo.jsx {test}</Text>
          </View>
        </UseTo>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {UseTo({
              delay: 3,
              cb: () => {
                console.log('test');
              },
            })}{' '}
          </Text>
        </View>
      );
    }
  };
  console.log(Constants.statusBarHeight)
  return (
    <View style={styles.screen}>
      <FuncComp />
      <ClassComp />
      {a()}
      <View style={styles.container}>
        <Text>index.jsx {test}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor:"darkgray",
    justifyContent: 'center',
    alignItems: 'center',
    //width:"100%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
