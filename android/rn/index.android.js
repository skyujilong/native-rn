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

//registerComponent中的key值与Native中的一个值是相关的，不能随便乱写
AppRegistry.registerComponent('testrn', () => App);
