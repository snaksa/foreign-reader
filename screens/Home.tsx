import React from 'react';
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';
import data from '../data/data';
import Section from './../components/Section';
import BookCard from './../components/BookCard';
import Word from './../components/Word';
import SearchButton from '../components/SearchButton';
import {BookModel, WordModel} from '../models/models';

const Home = ({navigation}) => {

  return (
    <ScrollView 
      style={styles.container} 
      showsVerticalScrollIndicator={false}
    >
      <SearchButton navigation={navigation}/>
      <Section title="Recent Books">
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: BookModel) => item.id.toString()}
          data={data.books}
          renderItem={({item}) => {
            return (
              <View style={styles.bookCard}>
                <BookCard
                  navigation={navigation}
                  title={item.title}
                  image={item.image}
                  author={item.author}
                />
              </View>
            )
          }}
        />
      </Section>

      <Section title="Recent Words">
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: WordModel) => item.id.toString()}
          data={data.words}
          renderItem={({item}) => {
            return (
              <View>
                <Word
                  word={item.word}
                  description={item.description}
                />
              </View>
            )
          }}
        />
      </Section>
    </ScrollView>
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

Home.navigationOptions = ({navigation}) => ({
  title: 'Foreign Reader',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
  },
})

export default Home;