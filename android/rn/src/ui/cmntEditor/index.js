'use strict';
/**
 * 底部弹出输入框
 */

import React from 'react';
import {View, Modal, TouchableHighlight, Text, Dimensions, TextInput} from 'react-native';

class CmntEditor extends React.Component {
    render() {
        let {width} = Dimensions.get('window');
        return (
            <View style={{
                marginTop: 22
            }}>
                <Modal animationType="fade" transparent={true} visible={true} presentationStyle={'overFullScreen'} onRequestClose={() => {
                    alert("Modal has been closed.")
                }}>
                    <View style={{
                        backgroundColor:'#000',
                        opacity:0.6,
                        flex:1
                    }}>
                    </View>
                    <View style={{
                        position:'absolute',
                        left:0,
                        bottom:0,
                        width:width,
                        height:250,
                        backgroundColor:'#fff'
                    }}>
                        <Text style={{
                            color:'#000'
                        }}>hello world</Text>
                        <TextInput style={{
                            height:200,
                            borderColor:'gray'
                        }}/>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default CmntEditor;
