/* 4 steps to creating a component */
// 1. Import Libraries
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// 2. Create a Component (A function that returns some JSX)
// const ComponentsScreen = function() { (These are the same thing)
const ComponentsScreen = () => {
  // JS Variable
  const name = 'Mike';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting Started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

// 3. Create a Stylesheet
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

// 4. Export Component
export default ComponentsScreen;
