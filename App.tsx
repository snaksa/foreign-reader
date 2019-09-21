import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import BookDetails from './screens/BookDetails';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Search: {screen: Search},
  BookDetails: {screen: BookDetails},
}, {
  initialRouteName: 'Home'
});

const App = createAppContainer(MainNavigator);

export default App;