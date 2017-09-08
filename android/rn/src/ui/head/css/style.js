'use strict';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        paddingLeft:32/2,
        paddingRight:32/2,
        paddingTop:48/2
    },
    user:{
        display:'flex',
        flex:1,
        height:40,
        flexDirection:'row',
        alignItems:'center', //属性定义项目在交叉轴上如何对齐。
        justifyContent:'flex-start', //属性定义了项目在主轴上的对齐方式。
        marginBottom:32/2
    },
    userImg:{
        height:40,
        width:40,
        borderRadius:50,
        marginRight:32/2
    },
    userName:{
        fontSize:32/2,
        fontWeight:'400',
        color:'#333'
    },
    title:{
        fontSize:38/2,
        color:'#333',
        lineHeight:56/2,
        fontWeight:'400',
        marginBottom:26/2
    },
    articleInfo:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height:28/2
    },
    time:{
        color:'#666',
        fontSize:28/2,
        fontWeight:'200'
    }
});
