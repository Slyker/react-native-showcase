import React, {Component,useState,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch,Button, Text, View, Platform} from 'react-native';

import UseTo from './UseTo.jsx'
import UseInterval from './UseInterval.jsx'
type Props = {};
export default CountDown = (props) => {
const [count, setCount] = useState(5)

return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
          Count down : {count}
            {UseInterval({
              countDown: count,
              limit:0,
              delay: 1,
              cb: () => {
                setCount(c => c-1)
               // return <Text style={styles.welcome}>Count down limit set to : 0  {'\n'}{count}</Text>
              },
            })}{' '}
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dark-gray',
    width:"100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});