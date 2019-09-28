import React from 'react';
import {StyleSheet, View, Image, StatusBar, Animated, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {WhiteColor, PrimaryColor} from '../theme';
import {verticalScale} from '../scale';
import {FormComponent} from './FormComponent';
import {Sending} from './Sending';
import {ThankYou} from './Thankyou';
const backgroundImage = require('../assets/background.jpg');
const logoImage = require('../assets/logo.jpg');

const SCREEN_STATUS = {
  VIEW_FORM: 'VIEW_FORM',
  SENDING: 'SENDING',
  DONE: 'DONE',
};

function sendToServer(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('OK');
    }, 1500);
  });
}

const COLLAPSE_SIZE = verticalScale(250);
const EXPAND_SIZE = verticalScale(150);

export class HomeScreen extends React.Component {
  state = {
    animatedHeight: new Animated.Value(COLLAPSE_SIZE),
    status: SCREEN_STATUS.VIEW_FORM,
    form: {
      amount: 15,
    },
  };

  expand = () => {
    Animated.timing(this.state.animatedHeight, {
      toValue: EXPAND_SIZE,
      duration: 300,
    }).start();
  };

  collapse() {
    Animated.timing(this.state.animatedHeight, {
      toValue: COLLAPSE_SIZE,
      duration: 300,
    }).start();
  }

  restartProcess = () => {
    this.setState({
      status: SCREEN_STATUS.VIEW_FORM,
    });
    this.collapse();
  };

  submitForm = async () => {
    this.expand();
    this.setState({
      status: SCREEN_STATUS.SENDING,
    });

    try {
      await sendToServer(this.state);
      this.setState({
        status: SCREEN_STATUS.DONE,
      });
    } catch (error) {}
  };

  changeValue = (field, value) => {
    this.setState({
      form: {
        ...this.state.form,
        [field]: value,
      },
    });
  };

  render() {
    const {animatedHeight, status} = this.state;
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView
            forceInset={{top: 'never'}}
            style={[
              styles.safeAreaView,
              status === SCREEN_STATUS.SENDING
                ? {backgroundColor: WhiteColor}
                : null,
            ]}>
            <StatusBar barStyle="light-content" />
            <View style={{flex: 1}}>
              <Image source={backgroundImage} style={styles.backgroundImage} />
              <Animated.View style={{...styles.container, top: animatedHeight}}>
                <Image source={logoImage} style={styles.logoImage} />
                {status === SCREEN_STATUS.VIEW_FORM && (
                  <FormComponent
                    form={this.state.form}
                    changeValue={this.changeValue}
                    submitForm={this.submitForm}
                  />
                )}
                {status === SCREEN_STATUS.SENDING && <Sending />}
                {status === SCREEN_STATUS.DONE && (
                  <ThankYou restartProcess={this.restartProcess} />
                )}
              </Animated.View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -40,
    alignSelf: 'center',
  },
  safeAreaView: {
    backgroundColor: PrimaryColor,
    flex: 1,
  },
  container: {
    paddingHorizontal: 25,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderTopRightRadius: 35,
    backgroundColor: WhiteColor,
    flexDirection: 'column',
    borderTopLeftRadius: 35,
  },

  backgroundImage: {
    position: 'absolute',
  },
});
