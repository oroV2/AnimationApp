import { Text, StyleSheet, View, Animated } from 'react-native'
import React, { Component } from 'react'

export default class Balls extends Component {

    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
})