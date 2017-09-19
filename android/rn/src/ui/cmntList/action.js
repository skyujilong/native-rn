'use strict';
import ActionType, {register} from '../../actionType';
//cmnt 发送请求成功相关状态
const POST_CMNT_REQ = 'POST_CMNT_REQ';
const POST_CMNT_SUCC = 'POST_CMNT_SUCC';
const POST_CMNT_FAIL = 'POST_CMNT_FAIL';
const ENABLE_GO_REPLY_LSIT = 'ENABLE_GO_REPLY_LSIT';
const DISABLE_GO_REPLY_LIST = 'DISABLE_GO_REPLY_LIST';

register([
    POST_CMNT_REQ,
    POST_CMNT_SUCC,
    POST_CMNT_FAIL,
    ENABLE_GO_REPLY_LSIT,
    DISABLE_GO_REPLY_LIST
]);

function beginPostCmnt() {
    return {type: ActionType.POST_CMNT_REQ}
}

export function disableGoReplyList() {
    return {
        type:ActionType.DISABLE_GO_REPLY_LIST
    }
}

export function enableGoReplyList() {
    return {
        type:ActionType.ENABLE_GO_REPLY_LSIT
    }
}

export function goReplyList() {
    return {type: 'cmnt'}
}

export function postCmnt() {
    return (dispatch) => {
        dispatch(beginPostCmnt());
        let formData = new formData();
        //内容
        formData.append('content', '232323');

        formData.append('channel', 'blog');
        formData.append('newsid', '5f1307920102y3lc');
        formData.append('usertype', 'blogpc');
        formData.append('ie', 'utf-8');
        formData.append('oe', 'utf-8');
        formData.append('ispost', '0');
        fetch('http://comment5.news.sina.com.cn/cmnt/submit', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;chartset=utf-8',
                'body': formData
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }, (e) => {
            console.log(e);
        }).then((data) => {
            console.log(data);
        })
    }
}
