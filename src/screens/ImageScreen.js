// Import Dependencies
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

// Create component
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        score={8}
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        score={10}
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        score={5}
      />
    </View>
  );
};

// Create Stylesheet
const styles = StyleSheet.create({});

// Export Component
export default ImageScreen;
