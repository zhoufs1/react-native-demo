import React, {Component} from 'react';
import {Button} from 'react-native';
import _ from 'lodash';

const colorEnum = ['#48b0f7', '#3A71A8', '#C03639', '#E65D6E', '#30B08F', '#4AB7BD', '#FEC171', '#30B08F', 'grey', 'yellow', 'pink'];

const randomColor = (color) => _.cloneDeep(colorEnum).filter(v => color !== v)[Math.floor(Math.random() * 10)];

export default class extends Component {
    static navigationOptions = {
        title: '走错门了',
    };

    constructor() {
        super();
        this.state = {color: '#841584'};

    }

    componentDidMount() {
    }

    render() {
        const {navigate} = this.props.navigation;
        const {color} = this.state;
        return (
            <Button
                title="我点下试试！"
                color={color}
                onPress={() =>
                    navigate('Home', {name: '打扰了...'})
                }
            />
        );
    }
}