/**
 * 文章正文页主类
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native';
import {reqArticle} from './action';
import './reducer';
class Article extends React.Component {
    constructor(){
        super();
    }
    componentWillMount(){
        console.log(this.props);
        const {initArticle} = this.props;
        initArticle();
    }
    render(){
        const {article} = this.props;
        console.log(article);
        return (
            <View>
                {article.article_title && <Text>{article.article_title}</Text>}
                <Text>haha ceshi fetch!!!</Text>
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
        initArticle:() => {
            dispatch(reqArticle());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);
