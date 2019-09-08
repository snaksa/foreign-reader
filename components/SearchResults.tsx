import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {BookModel} from '../models/models';
import BookCard from './BookSearchCard';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
          keyExtractor={(item: BookModel) => item.id.toString()}
          data={data}
          renderItem={({item}) => {
            return (
              <View>
                <BookCard
                  title={item.title}
                  author={item.author}
                />
              </View>
            )
          }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: "row",
    width: "100%",
  },
  searchIcon: {
    fontSize: 20,
    textAlignVertical: "center",
    margin: 5,
  }
});
