import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Search from './screens/Search';
import BookDetails from './screens/BookDetails';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer)

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Search: {screen: Search},
  BookDetails: {screen: BookDetails},
}, {
  initialRouteName: 'Home'
});

const Navigation = createAppContainer(MainNavigator);

// Render the app container component with the provider around it
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}