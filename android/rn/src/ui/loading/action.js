'use strict';
import ActionType, {register} from '../../actionType';
const HIDE_LOADING = 'HIDE_LOADING';
register([HIDE_LOADING]);
export function hideLoading(){
    return {
        type:ActionType.HIDE_LOADING,
        data:true
    }
}
