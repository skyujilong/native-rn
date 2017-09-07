/**
 * 所有的action type都在这里管理
 */
'use strict';

let actionType = {};
/**
 * action type注册管理，判断是否有重复的type，有则抛出异常
 * @param  {String|Array} type
 */
export function register(type){
    if(Object.prototype.toString.call(type) === '[object String]'){
        initActionType(type);
    }else if(Object.prototype.toString.call(type) === '[object Array]'){
        for (let t of type) {
            initActionType(t);
        }
    }
}

function initActionType(type){
    if(actionType[type]){
        throw new Error(`type 命名发生重复！请将重复名称"${type}"进行修改！`);
    }else{
        actionType[type] = type;
    }
}


export default actionType;
