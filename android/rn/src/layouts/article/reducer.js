'use strict';
//获取article相关内容
import {initRootReducer} from '../../reducerM';
import ActionType from '../../actionType';

/**
 * 获取的article相关信息
 * @param  {Object} [state={}] [description]
 * @param  {[type]} action     [description]
 * @return {[type]}            [description]
 */
function article(state = {}, action){
    switch (action.type){
        case ActionType.GET_ARTICLE_INFO:
            return {};
        case ActionType.GET_ARTICLE_INFO_SUCCESS:
            return action.data;
        case ActionType.GET_ARTICLE_INFO_FAIL:
            return action.data;
        default:
            return state;
    }
}
initRootReducer(article);
