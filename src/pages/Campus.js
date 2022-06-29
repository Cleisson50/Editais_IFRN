import * as React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.campus}>
            <TouchableHighlight style={style.btn1} onPress={() => { props.navigation.navigate("Ano") }}>
                <View>
                    <Text>Campus Apodi</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn2} onPress={() => { props.navigation.navigate("Ano") }}>
                <View>
                    <Text>Campus Caicó</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn3} onPress={() => { props.navigation.navigate("Ano") }}>
                <View>
                    <Text>Campus Canguaretama</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn4} onPress={() => { props.navigation.navigate("Ano") }}>
                <View>
                    <Text>Campus Lajes</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}

const style = StyleSheet.create({
    campus: {
        flex: 1,
    },
    btn1: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn2: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn3: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn4: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    }
})

