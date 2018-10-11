import React, {Component} from 'react';
import {Button, Animated} from 'react-native';
import _ from "lodash";

const colorEnum = ['#48b0f7', '#3A71A8', '#C03639', '#E65D6E', '#30B08F', '#4AB7BD', '#FEC171', '#30B08F', 'grey', 'yellow', 'pink'];
const randomColor = (color) => _.cloneDeep(colorEnum).filter(v => color !== v)[Math.floor(Math.random() * 10)];

export default class extends Component {
    static navigationOptions = {
        title: 'Hello zhoufs1!',
    };

    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
            fadeCol: '#841584',
            ContentMargin: new Animated.Value(10)
        };
    }

    componentDidMount() {
        Promise.resolve().then(() => Animated.timing(                  // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 1000,              // 让动画持续一段时间
            }
        ).start())
        // 开始执行动画
    }

    componentWillUpdate() {
        Promise.resolve().then(() => Animated.timing(                  // 随时间变化而执行动画
            this.state.ContentMargin,            // 动画中的变量值
            {
                toValue: 150,                   // 透明度最终变为1，即完全不透明
                duration: 50,              // 让动画持续一段时间
            }
        ).start()).then(setTimeout(() => this.setState({fadeCol: randomColor(this.state.fadeCol)}), 50))
    }

    render() {
        const style = {display: 'flex', alignItems: 'center'};
        const {fadeAnim, fadeCol, ContentMargin} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
                style={{
                    ...style,
                    opacity: fadeAnim,// 将透明度指定为动画变量值
                    margin: ContentMargin
                }}
            >
                <Button color={fadeCol}
                        title="闪瞎你的眼！！"
                        onPress={() =>
                            navigate('Profile', {name: '是你呀...'})
                        }
                />
            </Animated.View>
        );
    }
}