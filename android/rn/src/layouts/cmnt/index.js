'use strict';
//layout布局
import React from 'react';
import {View, Text, StyleSheet,Button,Alert} from 'react-native';
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

class Cmnt extends React.Component {
    static navigationOptions = {
        title: 'welcome cmnt'
    }
    render() {
        const {article} = this.props;
        console.log(article);
        return (
            <View style={styles.container}>
                <Button title="postCmnt" onPress={() => {

                }}/>
            </View>
        );
    }
    sendCmnt(){

    }
}
function mapDispatchToProps(state){

}

function mapStateToProps(state){
    return {
        article:state.article
    }
}

export default connect(mapStateToProps)(Cmnt);
