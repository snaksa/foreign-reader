import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default () => {
  return (
    <TextInput
      autoFocus
      style={styles.input}
      placeholder='Search Book'
      placeholderTextColor='#eee'
     />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#FFF',
    fontSize: 18
  }
});
