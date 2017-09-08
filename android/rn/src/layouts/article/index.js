'use strict';
/**
 * layout布局模块，仅仅提供，该页面上的布局元素
 */
import React from 'react';
import {View, Text, StyleSheet, Button, Alert, NativeModules} from 'react-native';
import {connect} from 'react-redux';
import ArticleM from '../../ui/articleM/index';
// console.log(NativeModules.ArticleHelper);
const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Article extends React.Component {
    static navigationOptions = {
        title: 'welcome!!!'
    }
    render() {
        return (
            <View style={styles.container}>
                {/* 头部导航 */}
                {/* 文章内容 */}
                {/* 入选主题 */}
                {/* 禁止评论 与 禁止转载 */}
                {/* 评论区 */}
                {/* 最底部的评论浮层 */}
                {/* <Text>hello world!!!22233</Text> */}
                <ArticleM/>
            </View>
        );
    }
}

export default connect()(Article);
