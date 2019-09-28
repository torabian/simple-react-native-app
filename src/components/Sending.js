import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const loadingAnimation = require('../assets/loading.json');

export class Sending extends React.Component {
  render() {
    return (
      <View style={styles.simpleScreen}>
        <Text style={styles.sendingText}>Sending</Text>
        <View style={{height: 110, marginTop: 50}}>
          <LottieView
            source={loadingAnimation}
            autoPlay={true}
            speed={2}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  simpleScreen: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },
  sendingText: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
