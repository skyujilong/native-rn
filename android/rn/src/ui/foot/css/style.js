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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    textInput:{
        display:'flex',
        borderWidth:1/PixelRatio.get(),
        borderRadius:2,
        borderColor:'#c2c2c2',
        width:width * 0.545,
        height:72/2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginLeft:15
    },
    textInputIcon:{
        width:36/2,
        height:42/2,
        marginLeft:18/2,
        marginRight:16.4/2
    },
    textInputText:{
        fontSize:14,
        color:'#c6b0a0',
        fontWeight:'200'
    },
    btns:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    cmnt:{
        width:37/2,
        height:44/2,
        marginRight:width * 0.075
    },
    zan:{
        width:42/2,
        height:40/2,
        marginRight:width * 0.075
    },
    share:{
        width:40/2,
        height:36/2,
        marginRight:40/2
    }
});
