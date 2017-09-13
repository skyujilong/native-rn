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
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import './reducer';
import {closeCmntEditor} from './action';
import {connect} from 'react-redux';

class CmntEditor extends React.Component {
    constructor(){
        super();
        this.el = null;
    }

    // componentDidUpdate(){
    //     setTimeout(() => {
    //         if(this.el){
    //             this.el.focus();
    //         }
    //         //console.log(this.el);
    //     },300);
    //     setTimeout(() => {
    //         console.log(Dimensions.get('window'));
    //     },500)
    // }

    componentDidMount(){
        const _self = this;
        console.log('mounting modal');
    }
    render() {
        let {width,height} = Dimensions.get('window');
        height -= 30;
        const {isShowCmnt,closeCmnt} = this.props;

        return (
            <Modal
                // 是否显示modal配置
                visible={isShowCmnt}
                animationType="fade"
                transparent={true}
                presentationStyle={'overFullScreen'}
                onRequestClose={() => {
                closeCmnt();
            }}>
                <KeyboardAvoidingView
                    behavior={'position'}
                    relativeKeyboardHeight={(keyFrame) => {
                        console.log(keyFrame);
                    }}
                    keyboardVerticalOffset={-260}
                    onKeyboardChange={(e) => {
                    /*TODO 动态根据nativeEvent的给定高度，给textInput一个动画上浮*/
                    console.log(e.nativeEvent);
                }}>
                    <ScrollView scrollEnabled={false}>
                        <TouchableWithoutFeedback onPress={() => {
                            closeCmnt();
                        }}>
                            <View style={{
                                backgroundColor: '#000',
                                opacity: 0.6,
                                height: height * 0.75
                            }}></View>
                        </TouchableWithoutFeedback>

                        <View style={{
                            backgroundColor: '#fff',
                            height: height * 0.25
                        }}>

                            <TextInput style={{
                                flex:1,
                                borderColor: 'gray',
                                textAlignVertical: 'top',
                                paddingBottom:0,
                                paddingTop:0,
                                marginTop:0,
                                marginBottom:0
                            }}
                            ref={(el) => {
                                this.el = el;
                            }}
                            onLayout={(e) => {
                                console.log(e.nativeEvent);
                            }}
                            autoFocus={true}
                            multiline={true}
                            placeholder={'hello world'}/>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
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
