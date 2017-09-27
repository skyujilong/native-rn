'use strict';
import React from 'react';
import './reducer';
import {View,Image,Animated,Dimensions,Easing} from 'react-native';
import {connect} from 'react-redux';

import {hideLoading} from './action';

class Loading extends React.Component {

    animateCfg = {
        rotateAnimat: new Animated.Value(0),
        hideAnimat: new Animated.Value(0),
        showNum:false
    }

    constructor(){
        super();
        this.runAnimate = this.runAnimate.bind(this);
        this.runHide = this.runHide.bind(this);
    }

    componentWillMount(){
        let {hideAnimat} = this.animateCfg;
        let {hideAnimatDispatch} = this.props
        this.runAnimate();
        hideAnimat.addListener((data) => {
            console.log(data);
            if(data.value === 1){
                console.log('动画执行完毕');
                //TODO 输出一个属性 用这个属性干掉这个图层\
                hideAnimatDispatch();
            }
        });
    }

    runAnimate(){
        this.animateCfg.rotateAnimat.setValue(0);
        Animated.timing(this.animateCfg.rotateAnimat,{
            toValue:1,
            duration:800,
            easing:Easing.linear
        }).start(() => {
            this.runAnimate();
        })
    }

    componentWillUnmount(){
        let {rotateAnimat,hideAnimat} = this.animateCfg;
        rotateAnimat.stopAnimation();
        hideAnimat.removeAllListeners();
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.props.loadDone != nextProps.loadDone){
            this.runHide();
            return true;
        }
    }

    runHide(){
        Animated.timing(this.animateCfg.hideAnimat,{
            toValue:1,
            duration:1600
        }).start(() => {
            this.animateCfg.showNum = true;
        });
    }

    render(){
        let {rotateAnimat,hideAnimat,showNum} = this.animateCfg;
        let {loadDone} = this.props;
        let hideVal = 1;
        if(loadDone){
            hideVal = hideAnimat.interpolate({
                inputRange:[0,1],
                outputRange:[1,0]
            });
        }
        let val = rotateAnimat.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        });
        let {height,width} = Dimensions.get('window');
        return (
            <Animated.View style={{
                position:'absolute',
                zIndex:20,
                width:width,
                height:height - 20,
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fff',
                opacity:hideVal
            }}>
                <Animated.Image
                    style={{
                        width:36,
                        height:36,
                        transform:[{
                            rotate:val
                        }]
                    }}
                    source={require('./image/loading.png')}
                />
            </Animated.View>
        );
    }
}
function mapStateToProps(state){
    return {
        loadDone:state.loadDone
    }
}

function mapDispatchToProps(dispatch){
    return {
        hideAnimatDispatch: function(){
            dispatch(hideLoading());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Loading);
