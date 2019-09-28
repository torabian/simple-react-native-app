import React from 'react';
import {TagSelect} from 'react-native-tag-select';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  PrimaryColor,
  tagFontSize,
  WhiteColor,
  GrayColor,
  NormalText,
} from '../theme';

export class TagPicker extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.label}</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TagSelect
            itemStyleSelected={styles.itemStyleSelected}
            itemLabelStyleSelected={styles.itemLabelStyleSelected}
            itemStyle={styles.itemStyle}
            itemLabelStyle={styles.itemLabelStyle}
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: GrayColor,
    marginTop: 25,
    fontSize: NormalText,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemStyle: {
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderColor: PrimaryColor,
    paddingHorizontal: 20,
  },
  itemStyleSelected: {
    backgroundColor: PrimaryColor,
    borderRadius: 30,
    borderColor: PrimaryColor,
    paddingHorizontal: 20,
  },
  itemLabelStyle: {
    fontWeight: 'bold',
    fontSize: tagFontSize,
    color: PrimaryColor,
    textTransform: 'uppercase',
  },
  itemLabelStyleSelected: {
    fontWeight: 'bold',
    fontSize: tagFontSize,
    color: WhiteColor,
    textTransform: 'uppercase',
  },
});
