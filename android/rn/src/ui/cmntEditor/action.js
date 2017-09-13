'use strict';

import ActionType, {register} from '../../actionType';

const CMNT_EDITOR_OPEN = 'CMNT_EDITOR_OPEN',
    CMNT_EDITOR_CLOSE = 'CMNT_EDITOR_CLOSE';

register([CMNT_EDITOR_OPEN,CMNT_EDITOR_CLOSE]);

export function openCmntEditor(){
    return {
        type:ActionType.CMNT_EDITOR_OPEN
    }
}

export function closeCmntEditor(){
    return {
        type:ActionType.CMNT_EDITOR_CLOSE
    }
}
