import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

const BookDetails = ({title, author, image, description}) => {
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
      <View style={styles.info}>
        <Text style={styles.description}>{description}</Text> 
      </View>
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
    borderColor: "red",
    borderWidth: 1,
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
    width: '90%',
    alignSelf: "center",
    flexDirection: 'column',
    marginBottom: 10,
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
    padding: 10,
  }
});

export default BookDetails;
