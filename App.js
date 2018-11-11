import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';

import HomeScreen from './containers/HomeScreen'
import EventDetailScreen from './containers/EventDetailScreen';
import EventCard from './components/EventCard'
import EventEditScreen from './containers/EventEditScreen'
import Page2 from './containers/page2'
// import DateTimePickerTextComponent from './components/DateTimePickerTextComponent/DateTimePickerTextComponent.js';

// export default class App extends Component {

//   render() {
//     return (
//       // <View style={styles.container}>
//       /* <DateTimePickerTextComponent /> */
//       //{/* </View> */}

//       //<AppStackNavigator />
//       <AppDrawerNavigator />
//     );
//   }
// }



const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  EventDetail: EventDetailScreen,
  EventCard: EventCard,
  EventEdit: EventEditScreen
})

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: AppStackNavigator,
  Page2: Page2,
})

export default createSwitchNavigator({
  App: AppDrawerNavigator
})