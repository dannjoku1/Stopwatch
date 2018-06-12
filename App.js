import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'


const Data = {
  timer: 1234567,
  laps: [ 1234, 1334, 1445, 1667],
}

function Timer({ interval }) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:
      {duration.seconds()}:
      {centiseconds}
    </Text>
  )
}

function OvalButton({ title, color, background }) {
  return (
    <View style={[styles.button, { backgroundColor: background }]}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, { color }]}> {title} </Text>
      </View>
    </View>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={Data.timer} />
        <OvalButton title='Start' color='#50D167' background ='#1B361F'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 130
  },
  timer: {
    color: '#ffffff',
    fontSize: 75, 
    fontWeight: '200'
  },
  button: {
    width: 150, 
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    fontSize: 20
  },
  buttonBorder: {
    width: 145, 
    height: 45,
    borderRadius: 35,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
