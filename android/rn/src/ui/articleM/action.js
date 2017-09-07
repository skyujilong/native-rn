'use strict';

import ActionType, {register} from '../../actionType';

register([
    'GET_ARTICLE_INFO',
    'GET_ARTICLE_INFO_SUCCESS',
    'GET_ARTICLE_INFO_FAIL'
]);

function beginReq(){
    return {
        type: ActionType.GET_ARTICLE_INFO
    }
}
/**
 * 获取article相关内容
 */
export function reqArticle(){
    return (dispatch) => {
        dispatch(beginReq());
        //TODO 采用async+await函数获取请求，
        //TODO 之后根据返回的promise进行后续操作
        //TODO get post 封装fetch函数
        //TODO 原始参数获取采用reducer的默认初始化操作来做
        //TODO import { NativeModules } from 'react-native';
        //TODO NativeModules.ArticleHelper
    }
}
