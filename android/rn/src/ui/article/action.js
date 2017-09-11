'use strict';
import ActionType, {register} from '../../actionType';

const ART_CHANGE_WEB_HEIGHT = 'ART_CHANGE_WEB_HEIGHT';

register([ART_CHANGE_WEB_HEIGHT]);

export function changeWebHeight(height){
    return {
        type:ActionType.ART_CHANGE_WEB_HEIGHT,
        data:height
    }
}
