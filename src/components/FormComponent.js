import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import {TagPicker} from './TagPicker';
import {Button} from './Button';
import {GrayDarkColor, GrayColor} from '../theme';

const priceList = [
  {id: 1, label: '$10'},
  {id: 2, label: '$50'},
  {id: 3, label: '$100'},
  {id: 4, label: 'Other'},
];

const periodList = [
  {id: 1, label: 'ONCE'},
  {id: 2, label: 'EVERYWEEK'},
  {id: 3, label: '1st and 3rd week'},
];

export class FormComponent extends React.Component {
  render() {
    return (
      <>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <TextInputMask
              type={'money'}
              options={{
                precision: 2,
                separator: '.',
                delimiter: '.',
                unit: '$',
                suffixUnit: '',
              }}
              value={this.props.form.amount}
              style={styles.currency}
              onChangeText={text => {
                this.props.changeValue('amount', text);
              }}
            />
          </KeyboardAvoidingView>
          <TagPicker data={priceList} max={1} label="How much would you pay?" />
          <TagPicker data={periodList} max={1} label="How often?" />
        </ScrollView>
        <Button label="give" onPress={this.props.submitForm} screenAction />
      </>
    );
  }
}

const styles = StyleSheet.create({
  currency: {
    fontSize: 35,
    fontWeight: 'bold',
    color: GrayDarkColor,
    borderBottomColor: GrayColor,
    paddingBottom: 10,
    borderBottomWidth: 2,
    textAlign: 'center',
    marginTop: 35,
  },
  scrollView: {
    flexDirection: 'column',
    marginBottom: 60,
  },
});
