import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import styles from './styles/index'

// import { Container } from './styles';

export default class Bhaskara extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            result: '',
            deltaResult: '',
            x1: '',
            x2: '',
        };
        this.delta = this.delta.bind(this);
    }

    delta() {
        let delta = (this.state.b * this.state.b) - 4 * this.state.a * this.state.c




        let s = this.state;
        s.result = delta;

        this.setState(s);

        if (s.result < 0) {
            s.deltaResult = 'A equação não possui resultados reais'
            s.x1 = ''
            s.x2 = ''
        } else if (s.result === 0) {
            s.deltaResult = 'A equação possui apenas um resultado real ou possui dois resultados iguais;'
            s.x1 = ''
            s.x2 = ''
        } else {

            let x1 = (-this.state.b + Math.sqrt(this.state.result)) / (2 * this.state.a);
            let x2 = (-this.state.b - Math.sqrt(this.state.result)) / (2 * this.state.a);
            s.x1 = 'x1 = ' + x1.toFixed(2);
            s.x2 = 'x2 = ' + x2.toFixed(2);
            s.deltaResult = ''
        }
        Keyboard.dismiss()

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
                        keyboardType='numeric'
                        onChangeText={(c) => { this.setState({ c }) }}
                    />
                    <Text style={styles.txt}>
                        = 0
                    </Text>
                </View>

                <View style={styles.cotainerBtn}>
                    <TouchableOpacity onPress={this.delta }>
                        <Text style={styles.txtBtn}>Calcular Delta</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.txtEqual}>
                    {this.state.result}
                </Text>

                <Text style={styles.txtEqual}>
                    {this.state.x1}
                </Text>

                <Text style={styles.txtEqual}>
                    {this.state.x2}
                </Text>

                <Text style={styles.txtDeltaResult}>
                    {this.state.deltaResult}
                </Text>

            </View>

        );
    }
}
