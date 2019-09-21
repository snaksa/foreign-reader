import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default ({title, image, author, navigation}) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate('BookDetails', {})}>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title.substr(0, 15)}{title.length > 15 ? '...' : ''}</Text> 
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: "column",
    width: "90%",
    height: 240,
    borderRadius: 5,
    margin: 5
  },
  image: {
    flex: 10,
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    resizeMode: 'stretch',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  info: {
    flex: 2,
    flexDirection: 'column'
  },
  title: {
    color: '#f4511e',
    textAlignVertical: "center",
    alignSelf: "center",
    fontWeight: "bold"
  },
  author: {
    textAlignVertical: "top",
    color: '#999',
    alignSelf: "center",
  }
});
