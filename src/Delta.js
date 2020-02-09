import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/index'

// import { Container } from './styles';

export default class Delta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            c: 0,

            // delta: b*b-4*a*c
        };
        this.delta = this.delta.bind(this);
    }

    delta() {
        let delta = this.state.b * this.state.b - 4 * this.state.a * this.state.c

        let s = this.state;
        s.result = delta;
        this.setState(s);

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cotainerInput}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='valor de a (aX²)'
                        placeholderTextColor="#607d8b"
                        keyboardType='numeric'
                        onChangeText={(a) => { this.setState({ a }) }}
                    />
                    <Text style={styles.txt}>
                        X²
                    </Text>
                </View>

                <View style={styles.cotainerInput}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='valor de b (bX)'
                        placeholderTextColor="#607d8b"
                        keyboardType='numeric'
                        onChangeText={(b) => { this.setState({ b }) }}
                    />
                    <Text style={styles.txt}>
                        X
                    </Text>
                </View>

                <View style={styles.cotainerInput}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='valor de c'
                        placeholderTextColor="#607d8b"
                        keyboardType='phone-pad'
                        onChangeText={(c) => { this.setState({ c }) }}
                    />
                    <Text style={styles.txt}>
                        = 0
                    </Text>
                </View>

                <View style={styles.cotainerBtn}>
                    <TouchableOpacity>
                        <Text style={styles.txtBtn}>Calcular Delta</Text>
                    </TouchableOpacity>

                </View>





                <Text style={styles.txtEqual}>
                    {this.state.a}x²{this.state.b}x{this.state.c}=0
                </Text>

            </View>

        );
    }
}
