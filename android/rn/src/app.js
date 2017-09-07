/**
 * 入口文件
 */
import React from 'react';
import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import Router from './router';
import reducerM from './reducerM';
import {Provider} from 'react-redux';
import {View,Text} from 'react-native';

let store = createStore(reducerM(),applyMiddleware(ReduxThunk));

console.log(store.getState());

export default class App extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
