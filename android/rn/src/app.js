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

// let store = createStore(reducerM(),applyMiddleware(ReduxThunk));
let store;
export default class App extends React.Component {
    constructor(){
        super();
        store = createStore(reducerM(),applyMiddleware(ReduxThunk));
    }
    componentWillMount(){
        console.log('will mount app.........');
    }
    render(){
        //这里可以接收到 默认初始化的props，
        //这里可以接收到 之后调用dispatch方法，去更改store
        console.log(this.props);
        console.log('init store.................');
        console.log(store.getState());
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
