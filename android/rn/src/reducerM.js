'use strict';
import {combineReducers} from 'redux-immutablejs';
let reducers = [];

export (reducer) => {
    reducers.push(reducer)
}

export default const reducerM = combineReducers(() => {
    let obj = {};
    for(let reducer of reducers){
        //TODO 注意重名问题
        obj[reducer.name] = reducer;
    }
    return obj;
}());
