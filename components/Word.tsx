import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({word, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word}</Text> 
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: "column",
    width: "90%",
    padding: 5,
  },
  word: {
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  description: {
    textAlignVertical: "top",
    color: '#999',
  }
});
