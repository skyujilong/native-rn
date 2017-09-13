'use strict';
/**
 * 底部弹出输入框
 */

import React from 'react';
import {
    View,
    Modal,
    TouchableHighlight,
    Text,
    Dimensions,
    TextInput,
    Alert,
    TouchableWithoutFeedback
} from 'react-native';
import './reducer';
import {closeCmntEditor} from './action';
import {connect} from 'react-redux';

class CmntEditor extends React.Component {
    constructor(){
        super();
        this.el = null;
    }

    componentDidUpdate(){
        setTimeout(() => {
            if(this.el){
                this.el.focus();
            }
            //console.log(this.el);
        },300);
        setTimeout(() => {
            console.log(Dimensions.get('window'));
        },500)
    }

    componentDidMount(){
        const _self = this;
        console.log('mounting modal');
    }
    render() {
        let {width} = Dimensions.get('window');
        const {isShowCmnt,closeCmnt} = this.props;

        return (
            <Modal
                // 是否显示modal配置
                visible={isShowCmnt}
                animationType="fade"
                transparent={true}
                presentationStyle={'overFullScreen'}
                onRequestClose={() => {
                alert("Modal has been closed.")
            }}>
                <TouchableWithoutFeedback onPress={() => {
                    closeCmnt();
                }}>
                    <View style={{
                        backgroundColor: '#000',
                        opacity: 0.6,
                        flex: 1
                    }}></View>
                </TouchableWithoutFeedback>

                <View style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: width,
                    height: 250,
                    backgroundColor: '#fff'
                }}>
                    <Text style={{
                        color: '#000'
                    }}>hello world</Text>
                    <TextInput style={{
                        height: 200,
                        borderColor: 'gray',
                        borderWidth: 1,
                        textAlignVertical: 'top'
                    }}
                    ref={(el) => {
                        this.el = el;
                    }}
                    onLayout={(e) => {
                        console.log(e.nativeEvent);
                    }}
                    // autoFocus={true}
                    multiline={true}
                    placeholder={'hello world'}/>
                </View>
            </Modal>
        );
    }
}

function mapStateToProps(state){
    return {
        isShowCmnt:state.isShowCmnt
    }
}

function mapDispatchToProps(dispatch){
    return {
        closeCmnt:() => {
            dispatch(closeCmntEditor());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CmntEditor);
