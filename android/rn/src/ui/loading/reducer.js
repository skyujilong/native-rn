'use strict';
import {initRootReducer} from '../../reducerM';
import ActionType from '../../actionType';

function hideLoading(state=false,action){
    if(action.type === ActionType.HIDE_LOADING){
        return action.data;
    }
    return state;
}
initRootReducer(hideLoading);
