/**
 * 路由配置相关
 */
'use strict';
import React from 'react';
import {addNavigationHelpers, StackNavigator, NavigationActions} from 'react-navigation';
import Article from './layouts/article';
import Cmnt from './layouts/cmnt';
import {initRootReducer} from './reducerM';
import {connect} from 'react-redux';

//router
const AppNavigator = StackNavigator({
    article: {
        screen: Article
    },
    cmnt: {
        screen: Cmnt
    }
},{
    headerMode:'screen'
});
// nav 是根据reducer生成出来的state中的一个属性
// const AppWithNavigationState = ({dispatch, nav}) => (
//     <AppNavigator navigation={
//         addNavigationHelpers({dispatch, state: nav})
//     }/>
// );
class AppWithNavigationState extends React.Component {
    render() {
        return (<AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>);
    }
}
//TODO 和reduce配合貌似有点问题 明天修改为 无reduce的格式
const mapStateToProps = state => ({nav: state.nav});
//TODO https://github.com/react-community/react-navigation/issues/1357
//初始化 nav的reducer相关
// const initialNavState = AppNavigator.router.getStateForAction(
//     AppNavigator.router.getActionForPathAndParams('article'),
// );
// https://github.com/react-community/react-navigation/issues/1357
// 依然不好使
const initialNavState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'article',
	  }),
	],
}))


function nav(state = initialNavState, action) {
    let nextState;
    //TODO switch case
    switch (action.type) {
        case 'article':
            nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
            break;
        case 'cmnt':
            //如果 两个screen之前的切换没有发生动画，说明是没有更改navigation的index的值，https://github.com/react-community/react-navigation/issues/351
            nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'cmnt'}), state);
            break;
        default:
            nextState = initialNavState;
    }
    return nextState || state;
}

initRootReducer(nav);

export default connect(mapStateToProps)(AppWithNavigationState);
