import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate('Search', {})}> 
        <View style={styles.searchContainer}>
          <EvilIcons name='search' style={styles.searchIcon}/>
          <Text style={styles.text}>
            Search Book
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: "column",
    width: "95%",
    borderRadius: 5,
    marginTop: 10,
    padding: 2,
    alignSelf: "center"
  },
  searchContainer: {
    flexDirection: "row"
  },
  text: {
    flex: 1,
    textAlignVertical: "center",
    color: '#999',
  },
  searchIcon: {
    fontSize: 20,
    textAlignVertical: "center",
    margin: 5
  }
});
