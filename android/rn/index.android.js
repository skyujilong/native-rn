/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/app';
// import { StackNavigator } from 'react-navigation';
//

// class App extends Component{
//     render(){
//         return (
//             <View>
//                 <Text>hello world</Text>
//             </View>
//         );
//     }
// }
//
// const SimpeApp = StackNavigator({
//     Home:{screen:App}
// });

//registerComponent中的key值与Native中的一个值是相关的，不能随便乱写
AppRegistry.registerComponent('testrn', () => App);
