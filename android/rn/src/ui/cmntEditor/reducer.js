'use strict';
import {initRootReducer} from '../../reducerM';
import ActionType from '../../actionType';

function isShowCmnt(state=false,action){
    switch (action.type) {
        case ActionType.CMNT_EDITOR_OPEN:
            return true;
        case ActionType.CMNT_EDITOR_CLOSE:
            return false;
    }
    return state;
}
initRootReducer(isShowCmnt);
