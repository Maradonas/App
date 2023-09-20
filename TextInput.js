import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
});

export default TextInput;
