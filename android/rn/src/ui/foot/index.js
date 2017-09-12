'use strict';
import React from 'react';
import {View,Text,Image,TouchableOpacity, TouchableWithoutFeedback,Alert} from 'react-native'
import styles from './css/style';

class Foot extends React.Component {
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <TouchableWithoutFeedback onPress={() => {
                        // 在底部弹出文本框之后输入内容
                        Alert.alert('press input!!');
                    }}>
                        <View style={styles.textInput}>
                            <Image style={styles.textInputIcon} source={require('./img/write.png')}/>
                            <Text style={styles.textInputText}>抒发下情怀呗~</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.btns}>
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Image style={styles.cmnt} source={require('./img/cmnt.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Image style={styles.zan} source={require('./img/zan.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {

                        }}>
                            <Image style={styles.share} source={require('./img/share.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Foot;
