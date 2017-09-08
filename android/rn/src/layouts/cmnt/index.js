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

export default class Cmnt extends React.Component {
    static navigationOptions = {
        title: 'welcome cmnt'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>hello cmnt!!!</Text>
            </View>
        );
    }
}
