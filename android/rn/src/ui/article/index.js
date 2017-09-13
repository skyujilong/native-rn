/**
 * 采用webview的方式进行渲染构建页面内容
 */
import React from 'react';
import {View,WebView,Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './css/style';
import ActionType from '../../actionType';
import {changeWebHeight} from './action';
import './reducer';

class Article extends React.Component {
    constructor(){
        super();
        this.message = this.message.bind(this);
    }
    render(){
        const {article,wbHeight} = this.props;
        const html = this.getRenderContent(article);
        return (
            <View style={styles.container}>
                {/*injectedJavaScript 方法可以送入后台一个执行方法，以及对应的参数
                    onMessage方法可以接受对应的传回来的值，比如说刚开始定义，webview的高度，之后根据load事件去派发postMessage更改webview的高度  */}
                {article.article_body && <WebView

                    style={{
                        flex:1,
                        height:wbHeight
                    }}

                    javaScriptEnabled={true}

                    scrollEnabled={false}

                    source={{html:html}}
                    onMessage={this.message}
                    onError={(e) => {
                        console.log(e);
                    }}

                    ></WebView>}

            </View>
        );
    }
    message(e){
        const {reSizeWebView} = this.props;
        let data = JSON.parse(e.nativeEvent.data);
        switch(data.type){
            case 'onload':
                reSizeWebView(data.data.height);
                break;
        }
    }
    getRenderContent(content){
        const {article_body} = content;
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
            <body style="overflow:hidden;">
                <div style="height:100%;overflow:hidden;">
                    <div id="container">
                        ${article_body}
                    </div>
                </div>
                <script>
                    window.onload = function(){
                        setTimeout(function(){
                            /* 第一个参数必须是string类型的 */
                            var height = getComputedStyle(document.getElementById('container')).height;
                            height = height.replace('px','') - 0;
                            postMessage(JSON.stringify({type:'onload',data:{height:height}}),'*');
                        },100)
                    }
                </script>
            </body>
        </html>`;//这里有个坑啊  因为 他这个渲染都是一行的 所以有//这个就会恶心了！！
        //还有个坑啊 尼玛竟然要等一个对象初始化后 才能调用postMessage方法！！
        //https://github.com/facebook/react-native/issues/11594
        return html;
    }
}

function mapStateToProps(state){
    return {
        article:state.article,
        wbHeight:state.articleWebViewHeight
    }
}

function mapDispatchToProps(dispatch){
    return {
        reSizeWebView: (height) => {
            dispatch(changeWebHeight(height));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);
