/**
 * 采用webview的方式进行渲染构建页面内容
 */
import React from 'react';
import {View,WebView,Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './css/style';
// let html = require('./test.html');
//

let html = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hehe 测试哦！！！</title>
        <style>
            *{
                margin:0;
                padding:0;
            }
        </style>
    </head>
    <body>
        这里是测试文案以及内容！！！！！
        <img src="http://portrait3.sinaimg.cn/5170186722/blog/180">
    </body>
</html>`;

class Article extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                {/*injectedJavaScript 方法可以送入后台一个执行方法，以及对应的参数
                    onMessage方法可以接受对应的传回来的值，比如说刚开始定义，webview的高度，之后根据load事件去派发postMessage更改webview的高度  */}
                <WebView
                    scrollEnabled={false}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    style={{
                        flex:1,
                        height:400
                    }}
                    source={{html:html}}

                    injectedJavaScript={'alert("haha");'}
                    ></WebView>
            </View>
        );
    }
}

export default connect()(Article);
