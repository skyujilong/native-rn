'use strict';
//layout布局
import React from 'react';
import {View, Text, StyleSheet,Button,Alert,Platform, BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {enableGoReplyList} from '../../ui/cmntList/action';

const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Cmnt extends React.Component {
    static navigationOptions = {
        title: 'welcome cmnt'
    }

    constructor(){
        super();
        this.handlerBack = this.handlerBack.bind(this);
    }

    render() {
        console.log(this.props);
        const {article,articleWebViewHeight,nav} = this.props;
        console.log(nav);
        console.log(articleWebViewHeight);
        return (
            <View style={styles.container}>
                <Button title="postCmnt" onPress={() => {

                }}/>
            </View>
        );
    }
    sendCmnt(){

    }

    handlerBack(){
        const {navigation} = this.props;
        // var navigator = this.navigator
        const backAction = NavigationActions.back();
        navigation.dispatch(backAction);
        return true;
    }

    componentDidMount(){
        const {changeGoReplyList} = this.props;
        // 这种方式无用 废弃
        // changeGoReplyList();
        //TODO 添加android back按钮方法
        BackHandler.addEventListener('hardwareBackPress',this.handlerBack);
    }

    componentWillUnmount(){
        console.log('销毁该组件！！！！');
        //TODO 接触绑定
        BackHandler.removeEventListener('hardwareBackPress',this.handlerBack);
    }
}
function mapDispatchToProps(state){

}

function mapStateToProps(state){
    return {
        article:state.article,
        articleWebViewHeight:state.articleWebViewHeight,
        nav:state.nav
    }
}
function mapDispatchToProps(dispatch){
    return {
        changeGoReplyList:() => {
            dispatch(enableGoReplyList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cmnt);
