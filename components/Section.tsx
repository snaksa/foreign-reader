import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default ({title, children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#FFF',
    flexDirection: "column",
    width: "95%",
    borderRadius: 5,
    padding: 5,
    alignSelf: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  }
});
