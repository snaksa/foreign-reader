import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default ({title, author}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name='open-book'  style={styles.icon}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text> 
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: "row",
    width: "90%",
    padding: 5
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 15,
  },
  icon: {
    fontSize: 20,
    padding: 5,
  },
  info: {
    flexDirection: "column",
    padding: 5,
  },
  title: {
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  author: {
    textAlignVertical: "top",
    color: '#999',
  }
});
