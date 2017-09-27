'use strict';
import {initRootReducer} from '../../reducerM';
import ActionType from '../../actionType';

function articleWebViewHeight(state = 1000, action) {

    if(action.type === ActionType.ART_CHANGE_WEB_HEIGHT){
        return action.data;
    }
    return state;
}

function loadDone(state=false,action){
    if(action.type === ActionType.ART_LOAD_DOWN){
        return action.data;
    }
    return state;
}


initRootReducer(articleWebViewHeight);
initRootReducer(loadDone);
