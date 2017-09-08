'use strict';
// import {combineReducers} from 'redux-immutablejs';
import {combineReducers} from 'redux';
let reducers = [];

export function initRootReducer(reducer){
    // console.log('push.............');
    reducers.push(reducer);
}

// export default combineReducers((() => {
//     let obj = {};
//     console.log(reducers);
//     //TODO reducers 的长度为0 这个是错误的
//     for(let reducer of reducers){
//         //TODO 注意重名问题
//         obj[reducer.name] = reducer;
//     }
//     console.log(obj);
//     return obj;
// })());
export default () => {
    let obj = {};
    for (let reducer of reducers) {
        obj[reducer.name] = reducer;
    }
    return combineReducers(obj);
}
