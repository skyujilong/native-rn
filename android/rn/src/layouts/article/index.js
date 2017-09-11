'use strict';
/**
 * layout布局模块，仅仅提供，该页面上的布局元素
 */
import React from 'react';
import {View, Text, StyleSheet, Button, Alert, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ArticleM from '../../ui/articleM/index';
//自己相关的reducer
import {reqArticle} from './action';
import './reducer';

import Header from '../../ui/head';
import Article from '../../ui/article';

import { NativeModules } from 'react-native';
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
        title: 'welcome!!!'
    }

    componentWillMount(){
        const {getArticle} = this.props;
        getArticle();
    }

    render() {
        const {article} = this.props;
        console.log(article);
        return (
            <View style={styles.container}>
                {/* 添加loading动画效果 */}
                <ScrollView>
                    {/* 头部导航 */}
                    <Header/>
                    {/* 文章内容 */}
                    <Article/>
                    {/* 入选主题 */}
                    {/* 禁止评论 与 禁止转载 */}
                    {/* 评论区 */}
                    {/* TODO 评论区中的接口是需要sub与subp的，
                        这样我们需要去给rn种cookie，目前的方案可以采用https://github.com/joeferraro/react-native-cookies */}
                    {/* 最底部的评论浮层 */}
                    {/* <Text>hello world!!!22233</Text> */}
                </ScrollView>
                <ArticleM/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        article:state.article
    }
}
function mapDispatchToProps(dispatch){
    return {
        getArticle: () => {
            dispatch(reqArticle());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleLayout);
