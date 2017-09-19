//评论列表部分
'use strict';
import React from 'react';
import {
    View,
    Text,
    Alert,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import styles from './css/style';
import {goReplyList} from './action';

class CmntList extends React.Component {
    render() {
        const {goReplyList,article} = this.props;
        console.log(article);
        return (
            <View style={styles.container}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>不可错过的精彩评论</Text>
                </View>
                <View style={styles.cmntContainer}>
                    <View style={styles.cmntUserAndBtn}>
                        <View style={styles.userInfo}>
                            <Image style={styles.userImg} source={{
                                uri: 'http://tvax4.sinaimg.cn/default/images/default_avatar_male_50.gif'
                            }}/>
                            <Text style={styles.username}>迪丽热巴</Text>
                        </View>
                        <View style={styles.cmntBtns}>
                            <Image style={styles.good} source={require('./img/nomal.png')}/>
                            <Text style={styles.goodnum}>235</Text>
                        </View>
                    </View>
                    <View style={styles.cmntBodyContainer}>
                        <Text style={styles.cmntBody}>这些都是我们那个时代的经典，至今还百看不厌啊！</Text>
                    </View>
                    <View style={styles.cmntBottomBtns}>
                        <Text style={styles.cmntTime}>5小时前</Text>
                        <Text style={styles.reply}>回复TA</Text>
                    </View>
                    <View style={styles.replyListContainer}>
                        {/* 跟帖内容... */}
                        <View style={[styles.cmntReplyContainer]}>
                            <Text style={styles.cmntReplyName}>我是如何缓解焦虑的：</Text>
                            <Text style={styles.cmntReplyBody}>作为一个程序猿，经常加班，找不到女票...</Text>
                        </View>
                        <View style={[styles.cmntReplyContainer, styles.cmntReplyContainerMt]}>
                            <Text style={styles.cmntReplyName}>我是如何缓解焦虑的：</Text>
                            <Text style={styles.cmntReplyBody}>作为一个程序猿，经常加班，找不到女票...</Text>
                        </View>
                        <View style={[styles.cmntReplyContainer, styles.cmntReplyContainerMt]}>
                            <Text style={styles.cmntReplyName}>我是如何缓解焦虑的：</Text>
                            <Text style={styles.cmntReplyBody}>作为一个程序猿，经常加班，找不到女票...</Text>
                        </View>
                        <View style={[styles.cmntReplyContainerMt]}>
                            <TouchableOpacity onPress={() => {
                                goReplyList();
                            }}>
                                <Text style={styles.cmntLookMore}>查看全部3条回复</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cmntUnderLine}></View>

                    <View style={styles.cmntUserAndBtn}>
                        <View style={styles.userInfo}>
                            <Image style={styles.userImg} source={{
                                uri: 'http://tvax4.sinaimg.cn/default/images/default_avatar_male_50.gif'
                            }}/>
                            <Text style={styles.username}>迪丽热巴</Text>
                        </View>
                        <View style={styles.cmntBtns}>
                            <Image style={styles.good} source={require('./img/nomal.png')}/>
                            <Text style={styles.goodnum}>235</Text>
                        </View>
                    </View>
                    <View style={styles.cmntBodyContainer}>
                        <Text style={styles.cmntBody}>这些都是我们那个时代的经典，至今还百看不厌啊！</Text>
                    </View>
                    <View style={styles.cmntBottomBtns}>
                        <Text style={styles.cmntTime}>5小时前</Text>
                        <Text style={styles.reply}>回复TA</Text>
                    </View>
                    <View style={styles.cmntUnderLine}></View>

                    <View style={styles.cmntUserAndBtn}>
                        <View style={styles.userInfo}>
                            <Image style={styles.userImg} source={{
                                uri: 'http://tvax4.sinaimg.cn/default/images/default_avatar_male_50.gif'
                            }}/>
                            <Text style={styles.username}>迪丽热巴</Text>
                        </View>
                        <View style={styles.cmntBtns}>
                            <Image style={styles.good} source={require('./img/nomal.png')}/>
                            <Text style={styles.goodnum}>235</Text>
                        </View>
                    </View>
                    <View style={styles.cmntBodyContainer}>
                        <Text style={styles.cmntBody}>这些都是我们那个时代的经典，至今还百看不厌啊！</Text>
                    </View>
                    <View style={styles.cmntBottomBtns}>
                        <Text style={styles.cmntTime}>5小时前</Text>
                        <Text style={styles.reply}>回复TA</Text>
                    </View>
                    <View style={styles.cmntUnderLine}></View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        article:state.article
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // postCmnt: () => {},
        goReplyList: () => {
            //TODO 需要添加一个公共的action与相应的reducers
            dispatch(goReplyList());
        }
    }
}

// export default CmntList;
export default connect(mapStateToProps, mapDispatchToProps)(CmntList);
