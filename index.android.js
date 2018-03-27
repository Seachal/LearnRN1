import React, {Component} from 'react';
import {
    AppRegistry, Navigator, BackAndroid, Platform
} from 'react-native';

// 导入来两个 自定义的RN组件
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class NaviModule extends Component {
    constructor(props) {
        super(props);
        //对这种写法还是不是很理解，需要回顾一下
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
        this.handleBackAndroid = this.handleBackAndroid.bind(this);
    }

    // 视图 转换时使用何种效果   驶入特意使这个名字与Navigator组件的configureScene函数同名，  在定义与挂接时，可以清楚地知道这个函数的用途
    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    // 如何挂接当前视图
    renderScene(router, navigator) {
        // NaviModule 组件的navigator变量被赋值
        this.navigator = navigator;
        switch (router.name) {
            case "login":
                return < LoginLeaf navigator={navigator}/>;
            case "waiting":
                return <WaitingLeaf phoneNumber={router.phoneNumber}
                                    userPW={router.userPW} navigator={navigator}
                />
        }
    }

    // NaviModule 组件的渲染函数声明它只有一个组件： navigator
// initialRoute 等是 Naviga
// tor 的pros*
    render() {
        return (
            // initialRoute 为啥是双花括号
            <Navigator
                initialRoute={{name: 'login'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }

    //
    handleBackAndroid() {
        if (this.navigator.getCurrentRoutes().length > 1) {
            this.navigator.pop();
            return true;
        }
        return false;
    }


    // react框架  生命周期函数， 检测当前的运行平台是否为android平台，  如果是则设置一个对android手机后退事件的监听器
    //componentDidMount 可以代码提示
    componentDidMount() {
        if (Platform.OS === "android")
            BackAndroid.addEventListener(
                'hardwareBackPress', this.handleBackAndroid);

    }

    // react框架  生命周期函数， 函数在组件被移除前，清楚组件被挂接时设置的后退键事件监听器。
    //componentWillUnmount
    componentWillUnmount() {
        if (Platform.OS === "android") BackAndroid.removeEventListener(
            'hardwareBackPress', this.handleBackAndroid);
    }
}


AppRegistry.registerComponent('LearnRN1', () => NaviModule);




/*
//  定义一个组件（实质上是一个JS类）
export default class LearnRN1 extends Component {


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

                <Text style={styles.bigTextPrompt}>
                    确 定
                </Text>

            </View>
        );
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

AppRegistry.registerComponent('LearnRN1', () => LearnRN1);
console.ignoredYellowBox = ['Remote debugger'];
*/

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


