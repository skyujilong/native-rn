'use strict';
import ActionType, {register} from '../../actionType';

const ART_CHANGE_WEB_HEIGHT = 'ART_CHANGE_WEB_HEIGHT';
const ART_LOAD_DOWN = 'ART_LOAD_DOWN';

register([ART_CHANGE_WEB_HEIGHT,ART_LOAD_DOWN]);

export function changeWebHeight(height){
    return {
        type:ActionType.ART_CHANGE_WEB_HEIGHT,
        data:height
    }
}

export function loadDone(){
    return {
        type:ActionType.ART_LOAD_DOWN,
        data:true
    }
}
