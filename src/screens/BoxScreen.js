import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    top: 100,
  },
  viewThreeStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  },
});

export default BoxScreen;
