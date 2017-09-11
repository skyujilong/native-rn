'use strict';
import React from 'react';
import {View,Text,Image} from 'react-native'
import styles from './css/style';

class Foot extends React.Component {
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.textInput}>
                        <Image style={styles.textInputIcon} source={require('./img/enabled.png')}/>
                        <Text style={styles.textInputText}>抒发下情怀呗~</Text>
                    </View>
                    <View>
                        {/* <Image/>
                        <Image/>
                        <Image/> */}
                    </View>
                </View>
            </View>
        )
    }
}

export default Foot;
