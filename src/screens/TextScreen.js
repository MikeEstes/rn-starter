// Import Dependencies
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

// Create component
const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />

      {password.length >= 5 ? null : (
        <Text>The password must be longer than 5 characters.</Text>
      )}
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

// Export Component
export default TextScreen;
