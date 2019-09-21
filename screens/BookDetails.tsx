import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, FlatList } from 'react-native';
import Section from '../components/Section';
import Word from '../components/Word';
import {WordModel} from '../models/models';
import data from '../data/data';

const BookDetails = () => {
  const title = "The Long Walk";
  const author = 'Stephen King';
  const image = "https://images-na.ssl-images-amazon.com/images/I/71m0GnD2ZGL.jpg";
  const description = "No summary.";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgound}></View>
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image 
            style={styles.image}
            source={{uri: image}}
          />
      </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text> 
        <Text style={styles.author}>{author}</Text>
      </View>
      <Section title="Sumamry">
        <Text style={styles.description}>{description}</Text> 
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

BookDetails.navigationOptions = ({navigation}) => ({
  title: 'Book details',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#d4d0e1',
  },
  backgound: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: Dimensions.get('window').width,
    marginTop: -(Dimensions.get('window').width / 2),
    backgroundColor: '#000',
    borderRadius: 200,
    borderWidth: 10,
    borderColor: '#f4511e'
  },
  imageContainer: {
    height: 270,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    backgroundColor: '#f4511e', 
    padding: 10
  },
  image: {
    width: 150,
    height: 240
  },
  info: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#f4511e',
    borderRadius: 5,
    width: '95%',
    alignSelf: "center",
    flexDirection: 'column',
  },
  title: {
    padding: 10,
    paddingBottom: 0,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    fontWeight: "bold"
  },
  author: {
    textAlignVertical: "top",
    color: '#999',
    alignSelf: "center",
    paddingBottom: 5,
  },
  description: {
    textAlign: "justify",
    padding: 5,
  }
});

export default BookDetails;
