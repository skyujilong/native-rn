'use strict';
//layout布局
import React from 'react';
import {View, Text, StyleSheet,Button,Alert} from 'react-native';
import {connect} from 'react-redux';
import {enableGoReplyList} from '../../ui/cmntList/action';

const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Cmnt extends React.Component {
    static navigationOptions = {
        title: 'welcome cmnt'
    }
    render() {
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

    componentDidMount(){
        const {changeGoReplyList} = this.props;
        changeGoReplyList();
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
