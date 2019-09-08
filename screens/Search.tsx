import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import data from '../data/data';
import SearchField from './../components/SearchField';
import SearchResults from './../components/SearchResults';

const Search = () => {
  return (
    <View>
      <SearchResults data={data.books} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#d4d0e1',
  },
  bookCard: {
    width: 150
  },
});

Search.navigationOptions = ({navigation}) => ({
  headerTitle: <SearchField/>,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',

})

export default Search;