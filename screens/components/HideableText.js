import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HideableText = ({ style,initialText ,isTextVisible}) => {

  // Function to mask the text
  const maskText = text => text.replace(/./g, '*');

  return (
      <Text style={style}>
        {isTextVisible ? initialText : maskText(initialText)}
      </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  }
});

export default HideableText;
