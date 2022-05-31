import React, {Component,useState,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch,Button, Text, View} from 'react-native';

type Props = {};
export default UseInterval = (props) => {
  let interval;
  
  const [result,setResult] = useState(null)
  useEffect(() => { // works !! trigger when count is updated
  let limit = 0
    interval = setInterval(() => {
      if(props.limit === undefined){
        props.limit = 0
      }
      //console.log(limit)
      if(props.countDown > props.limit){
        let rsult = props.cb()
        setResult(rsult)          
        return rsult
      }else{
        interval = clearInterval(interval)
      }

    }, props.delay * 1000);
   return () => interval = clearInterval(interval);
  },[props.countDown]);
  if(!props.class){
    return result
  }
  return props.children
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
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