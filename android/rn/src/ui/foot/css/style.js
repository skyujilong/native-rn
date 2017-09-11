'use strict';
import {StyleSheet,Dimensions,PixelRatio} from 'react-native';
const {width} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        height:112/2,
        backgroundColor:'#fff',
        width:width
    },
    wrapper:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    textInput:{
        display:'flex',
        borderWidth:1/PixelRatio.get(),
        borderRadius:2,
        borderColor:'#c2c2c2',
        width:408/2,
        height:72/2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:15
    },
    textInputIcon:{
        width:31/2,
        height:34/2,
        marginLeft:18/2,
        marginRight:16.4/2
    },
    textInputText:{
        fontSize:14,
        color:'#c6b0a0',
        fontWeight:'200'
    }

});
