'use strict';
/**
 * layout布局模块，仅仅提供，该页面上的布局元素
 */
import React from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import {connect} from 'react-redux';
//自己相关的reducer
import {reqArticle} from './action';
import './reducer';

import Header from '../../ui/head';
import Article from '../../ui/article';
import {loadDone} from '../../ui/article/action';

import Foot from '../../ui/foot';
import CmntEditor from '../../ui/cmntEditor';
import CmntList from '../../ui/cmntList';


import { NativeModules } from 'react-native';

import Loading from '../../ui/loading';

import {hideLoading} from '../../ui/loading/action';


const {ArticleHelper} = NativeModules;
//注册了一个helper的方法，用于提供接口访问相关
ArticleHelper.ajax(JSON.stringify({url:'helloworld','method':'post'})).then(function(data){
    console.log(data);
});


const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:'#fff'
    }
})

class ArticleLayout extends React.Component {
    static navigationOptions = {
        header: ({navigation})=>{
            //这里就navigation能用
            // console.log('helloworld');
            // console.log(navigation);
            // console.log(props);
            // const {resetState} = this.props;
            //这里的navigation中的dispatch就是redux中的dispatch 太棒了可以这里直接dispatch action了！！！
            const {dispatch} = navigation;
            return (
                <View style={{
                    height:30,
                    flexDirection:'row'
                }}>
                    <Button title={'点我回退到activity'} onPress={() => {
                        const {goBack} = ArticleHelper;

                        goBack().then(function(){
                            console.log('go back success');
                            setTimeout(() => {
                                //重置状态
                                //重置文章的isDone状态
                                dispatch(loadDone(false));
                                //重置loading的view的状态
                                dispatch(hideLoading(false));
                            },300);

                        });
                    }}/>
                    <Text style={{
                        marginLeft:20
                    }}>HELLO WORLD!!!!</Text>
                </View>
            )
        }
    }

    componentWillMount(){
        const {getArticle} = this.props;
        getArticle();
    }

    render() {
        const {state} = this.props.navigation;
        const {hideLoading} = this.props;
        return (
            <View style={styles.container}>
                {/* 添加loading动画效果 */}
                {!hideLoading && <Loading/>}
                <ScrollView style={{
                    marginBottom:56
                }}>
                    {/* 头部导航 */}
                    <Header/>
                    {/* 文章内容 */}
                    <Article/>
                    {/* 入选主题 */}
                    {/* 禁止评论 与 禁止转载 */}
                    {/* 评论区 */}
                    <CmntList/>
                    {/* TODO 评论区中的接口是需要sub与subp的，
                        这样我们需要去给rn种cookie，目前的方案可以采用https://github.com/joeferraro/react-native-cookies */}
                    {/* 最底部的评论浮层 */}
                    {/* <Text>hello world!!!22233</Text> */}
                </ScrollView>
                {/* 底部页脚位置 */}
                <Foot/>
                <CmntEditor/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        article:state.article,
        hideLoading:state.hideLoading
    }
}
function mapDispatchToProps(dispatch){
    return {
        getArticle: () => {
            dispatch(reqArticle());
        },
        resetState: () => {
            //重置文章的isDone状态
            dispatch(loadDone(false));
            //重置loading的view的状态
            dispatch(hideLoading(false));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleLayout);
