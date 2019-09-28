import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  PrimaryColor,
  tagFontSize,
  WhiteColor,
  GrayColor,
  NormalText,
} from '../theme';

export class Button extends React.Component {
  static defaultProps = {
    onPress: () => {},
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          this.props.screenAction ? styles.screenAction : null,
        ]}>
        <Text style={styles.text}> {this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: WhiteColor,
    fontSize: NormalText,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  container: {
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    backgroundColor: PrimaryColor,
  },
});
