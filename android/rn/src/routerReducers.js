'use strict';
import {NavigationActions} from 'react-navigation';
import {AppNavigator} from './router';
import {initRootReducer} from './reducerM';
const initialNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('article')
);

function nav(state = initialNavState, action){
    //TODO switch case
    return state;
}

initRootReducer.push(nav);
