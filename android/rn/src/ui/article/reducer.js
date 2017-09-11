'use strict';
import {initRootReducer} from '../../reducerM';
import ActionType from '../../actionType';

function articleWebViewHeight(state = 500, action) {

    if(action.type === ActionType.ART_CHANGE_WEB_HEIGHT){
        return action.data;
    }
    return state;
}

initRootReducer(articleWebViewHeight);
