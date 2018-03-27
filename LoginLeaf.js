import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Dimensions, PixelRatio, TextInput,Alert
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;
//  定义一个组件（实质上是一个JS类）
export default class LoginLeaf extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: ''
        };
        this.updateNum = this.updateNum.bind(this);
        this.updatePW = this.updatePW.bind(this);
    }

    updateNum(newText) {
        this.setState((oldState) => {
            for (var aName in oldState) {
                console.log('aName：' + aName);
                console.log('oldState：' + oldState[aName])
            }
            return {
                inputedNum: newText,
                aBrandnewStateVariable: 'I am a new variable.'
            };
        }, this.changNumDome);
        //    updateNum 函数不需要返回值

        console.log('this in updateNum');
        console.log(this);
    }

    changNumDome() {
        console.log('React Native has  changed  inputed  Num')
        console.log('语法很重要，es6的语法很重要')
        console.log('近期的blog该写了，而且近期的github的contribute不够，空地太多了。')
        console.log('')
    }

    updatePW(newText) {
        this.setState(() => {
            return {
                inputedPW: newText,
            };
        });
    }


    render() {
        console.log('this in render.');
        console.log(this);
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                    // onChangeText={(newText) => this.updateNum(newText)}
                           onChangeText={this.updateNum}
                />
                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           password={true}
                           onChangeText={this.updatePW}
                />

                <Text style={styles.bigTextPrompt}
                      onPress={() => this.userPressConfirm()}
                >
                    确 定
                </Text>
                <Text style={styles.bigTextPrompt}
                      onPress={() => this.userPressAddressBook()}
                >
                    通讯录
                </Text>
            </View>
        );
    }
    // push函数传入的变量成为renderScene函数的第一个参数（一个router实例），  跳转到witing
    userPressConfirm(){
        // this.props.navigator.push({
        //     phoneNumber:this.state.inputedNum,
        //     userPW: this.state.inputedPW,
        //     name:'waiting',
        // })
        // 上面注释的代码是因为要写  alert的代码所以暂时注释掉
        Alert.alert(
            // 一个''内的内容是一行吗？  记住最后又一个  逗号
             '提示',
             '确定使用' + this.state.inputedNum+'号码登录吗？',
             [
                 { text: '取消', onPress :( ()=>{}),style:'cancel'}, //按下取消 无操作
                 {text:'确定', onPress:this.jumpToWaiting}
             ]
        );
    }
    jumpToWaiting() {
        this.props.navigator.push({
            phoneNumber:this.state.inputedNum,
            userPW: this.state.inputedPW,
            name:'waiting',
        });
    }


    userPressAddressBook(){
        
    }
    
}
// 类似css，实质上是声明了一个变量
let styles = StyleSheet.create({
    container: {
        //弹性宽高，
        flex: 1,
        backgroundColor: 'white',
    },

    textInputStyle: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        fontSize: 20
    },

    textPromptStyle: {
        margin: widthOfMargin,
        fontSize: 20,

    },
    bigTextPrompt: {
        margin: widthOfMargin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30

    }
});


//粗蓝色 关键字 ， 粗紫色  ？自己写的事state，官方写的不止到时什么； 粗绿色 值， 细浅黄色 函数名（自定义，非自定义），
//  细绿色  变量 常量

/*
/!**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *!/

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio
} from 'react-native';

// {height, width} 定义了两个常量
const {height, width} = Dimensions.get('window');
//   定义了一个常量 pixelRadio
const pixelRadio  = PixelRatio.get();

export default class LearnRN1 extends Component {
    render() {
        let aValue;
        console.log('Render hs been  executed.')
        console.log('Screen  height is :' + height);
        console.log('aValue is :' + aValue);
        console.log('The type of aValue is：' + typeof(aValue));

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    一逻辑像素等于{pixelRadio}实际像素单位
                </Text>
                {/!*{'\n'} 用于文字换行*!/}
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js{'\n'}
                    手机屏幕高度为{height}逻辑像素
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu{'\n'}
                    手机屏幕宽度为{width}逻辑像素
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('LearnRN1', () => LearnRN1);
console.ignoredYellowBox = ['Remote debugger'];*/


