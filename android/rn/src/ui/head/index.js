'use strict';
/**
 * 头部 相关代码
 */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './css/style';

class Header extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image style={styles.userImg} source={{uri:'http://portrait3.sinaimg.cn/5170186722/blog/180'}}/>
                    <Text style={styles.userName}>李易峰</Text>
                    {/* 关注按钮 */}
                </View>
                <View>
                    <Text style={styles.title}>乐高蝙蝠侠的小拳拳疯狂捶我笑点配音特辑蝙蝠侠怼阿福很逗比</Text>
                </View>
                <View style={styles.articleInfo}>
                    <Text style={styles.time}>2017-9-8 15:22:18</Text>
                    {/* <View><Image/></View> */}
                </View>
            </View>
        );
    }
}


export default connect()(Header);
