/**
 * 入口文件
 */

import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducerM from './reducerM';
//TODO 引入reducer 之后 根据reducer初始化store
console.log(reducerM);
let store = createStore(reducerM,applyMiddleware(ReduxThunk));
console.log(store);
