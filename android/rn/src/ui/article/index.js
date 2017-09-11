/**
 * 采用webview的方式进行渲染构建页面内容
 */
import React from 'react';
import {View,WebView,Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './css/style';

// let html =`<html><body>hello world</body></html>`;

class Article extends React.Component {
    constructor(){
        super();
        this.message = this.message.bind(this);
    }
    render(){
        const {article} = this.props;
        const html = this.getRenderContent(article);
        console.log(html);
        return (
            <View style={styles.container}>
                {/*injectedJavaScript 方法可以送入后台一个执行方法，以及对应的参数
                    onMessage方法可以接受对应的传回来的值，比如说刚开始定义，webview的高度，之后根据load事件去派发postMessage更改webview的高度  */}
                {article.article_body && <WebView

                    style={{
                        flex:1,
                        height:500
                    }}

                    javaScriptEnabled={true}

                    scrollEnabled={false}

                    source={{html:html}}
                    onMessage={(e) => {
                        console.log('message event.....');
                    }}
                    onError={(e) => {
                        console.log(e);
                    }}
                    // onNavigationStateChange={() => {
                    //     console.log(arguments);
                    // }}

                    ></WebView>}

            </View>
        );
    }
    message(e){
        console.log(e);
        console.log('message..............');
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
            <body>
                <div id="test"></div>
                ${article_body}
                <script>
                    window.onload = function(){
                        setTimeout(function(){
                            postMessage('helloworld','*');
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
        article:state.article
    }
}

export default connect(mapStateToProps)(Article);
