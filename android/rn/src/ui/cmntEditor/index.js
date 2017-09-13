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

class CmntEditor extends React.Component {
    componentDidMount(){
        console.log('mounting modal');
    }
    render() {
        let {width} = Dimensions.get('window');
        return (
            <Modal
                // 是否显示modal配置
                visible={false}
                animationType="fade"
                transparent={true}
                presentationStyle={'overFullScreen'}
                onRequestClose={() => {
                alert("Modal has been closed.")
            }}>
                <TouchableWithoutFeedback onPress={() => {
                    //TODO 关闭当前的model
                    Alert.alert('touch mask!!');
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
                    autoFocus={true}
                    multiline={true}
                    placeholder={'hello world'}/>
                </View>
            </Modal>
        );
    }
}

export default CmntEditor;
