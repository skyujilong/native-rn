//评论列表部分
'use strict';
import React from 'react';
import {View,Text,Alert,Button} from 'react-native';
import {connect} from 'react-redux';



class CmntList extends React.Component {

}

function mapStateToProps(state){
    return Object.assign({},state);
}
function mapDispatchToProps(dispatch){
    return {
        postCmnt:(dispatch) => {

        }
    }
}
