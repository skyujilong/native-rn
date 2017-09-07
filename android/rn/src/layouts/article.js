'use strict';
//layout布局
import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
    'container': {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

class Article extends React.Component {
    static navigationOptions = {
        title: 'welcome!!!'
    }
    render() {
        console.log(this.state);
        let {showCmnt} = this.props;
        console.log(showCmnt);
        return (
            <View style={styles.container}>
                <Text>hello world!!!22233</Text>
                <Button onPress={() => {
                    // Alert.alert('press me');
                    showCmnt();
                }} title="press me ok?"/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return Object.assign({},state);
}
function mapDispatchToProps(dispatch){
    return {
        showCmnt:(...rest) => {
            console.log('dispatching...........');
            //dispatch(action)
            dispatch({
                'type':'cmnt'
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);
