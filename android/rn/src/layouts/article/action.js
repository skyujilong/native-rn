'use strict';

import ActionType, {register} from '../../actionType';
import { NativeModules } from 'react-native';
const {ArticleHelper} = NativeModules;
console.log(ArticleHelper);

register(['GET_ARTICLE_INFO', 'GET_ARTICLE_INFO_SUCCESS', 'GET_ARTICLE_INFO_FAIL']);

function beginReq() {
    return {type: ActionType.GET_ARTICLE_INFO}
}

function success(data) {
    return {type: ActionType.GET_ARTICLE_INFO_SUCCESS, data: data}
}
function fail(data) {
    return {type: ActionType.GET_ARTICLE_INFO_FAIL, data: data}
}

/**
 * 获取article相关内容
 */
export function reqArticle() {
    return (dispatch) => {
        dispatch(beginReq());
        //TODO 采用async+await函数获取请求，
        //TODO 之后根据返回的promise进行后续操作
        //TODO get post 封装fetch函数
        //TODO 原始参数获取采用reducer的默认初始化操作来做
        //TODO import { NativeModules } from 'react-native';
        //TODO NativeModules.ArticleHelper
        // formData 仅在Post请求中 可以使用
        // let formData = new FormData();
        // //TODO 封装一个方案处理这个问题
        // formData.append('chno',ArticleHelper.chno);
        // formData.append('appid',ArticleHelper.appid);
        // formData.append('appver',ArticleHelper.appver);
        // formData.append('deviceid',ArticleHelper.deviceid);
        // formData.append('login_uid',ArticleHelper.login_uid);
        // formData.append('article_id',ArticleHelper.article_id);
        // formData.append('blog_uid',ArticleHelper.blog_uid);
        // formData.append('sign',ArticleHelper.sign);
        let params = '';
        params += '&chno=' + ArticleHelper.chno;
        params += '&appid=' + ArticleHelper.appid;
        params += '&appver=' + ArticleHelper.appver;
        params += '&deviceid=' + ArticleHelper.deviceid;
        params += '&login_uid=' + ArticleHelper.login_uid;
        params += '&article_id=' + ArticleHelper.article_id;
        params += '&blog_uid=' + ArticleHelper.blog_uid;
        params += '&sign=' + ArticleHelper.sign;
        // params += '&chno=' + ArticleHelper.chno;
        //获取文章数据
        fetch('http://10.69.3.136:8088/api/article/article_info.php?' + params, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;chartset=utf-8'
            }
        }).then((response) => response.json()).then((res) => {
            dispatch(success(res.data));
        },(err) => {
            dispatch(success(err));
        })
    }
}
