'use strict';
import ActionType from '../../actionType';
import {initRootReducer} from '../../reducerM';

function ableGoCmntList(state = true, action) {
    switch (action.type) {
        case ActionType.ENABLE_GO_REPLY_LSIT:
            return true;

        case ActionType.DISABLE_GO_REPLY_LIST:
            return false;
        default:
            return state;
    }
}

initRootReducer(ableGoCmntList);
