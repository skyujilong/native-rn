'use strict';
/**
 * 底部弹出输入框
 */

import React from 'react';
import {View, Modal, TouchableHighlight, Text} from 'react-native';

class CmntEditor extends React.Component {
    render() {
        return (
            <View style={{
                marginTop: 22
            }}>
                <Modal animationType="fade" transparent={true} visible={true} presentationStyle={'overFullScreen'} onRequestClose={() => {
                    alert("Modal has been closed.")
                }}>
                    <View style={{
                        marginTop: 22,
                        backgroundColor:'#000',
                        opacity:0.6
                    }}>
                        <View style={{
                            backgroundColor:'#fff'
                        }}>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                // this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default CmntEditor;
