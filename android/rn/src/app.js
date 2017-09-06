/**
 * 入口文件
 */

import ReduxThunk from 'redux-thunk';
import {createStrore,applyMiddleware} from 'redux';
import rootReducer from './common/rootReducer';
//TODO 引入reducer 之后 根据reducer初始化store
