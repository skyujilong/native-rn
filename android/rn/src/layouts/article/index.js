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
