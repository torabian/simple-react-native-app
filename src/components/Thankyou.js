import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button} from './Button';
const okAnimation = require('../assets/ok.json');

export class ThankYou extends React.Component {
  render() {
    return (
      <>
        <View style={styles.simpleScreen}>
          <Text style={styles.thankYouText}>Thank you!</Text>
          <View style={{height: 110, marginTop: 50}}>
            <LottieView
              source={okAnimation}
              autoPlay={true}
              loop={false}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <Button label="done" onPress={this.props.restartProcess} screenAction />
      </>
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
  thankYouText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
