'use strict';
//layout布局
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default class Article extends React.Component {
    static navigationOptions = {
        title: 'welcome!!!'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>hello world!!!22233</Text>
            </View>
        );
    }
}
