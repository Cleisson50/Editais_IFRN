import * as React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.campus}>
            <TouchableHighlight style={style.btn1} onPress={() => { props.navigation.navigate("Campus") }}>
                <View>
                    <Text>Editais Graduação</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn2} onPress={() => { props.navigation.navigate("Campus") }}>
                <View>
                    <Text>Editais Integrado</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn3} onPress={() => { props.navigation.navigate("Campus") }}>
                <View>
                    <Text>Editais Estágio</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={style.btn4} onPress={() => { props.navigation.navigate("Campus") }}>
                <View>
                    <Text>Editais Tecnico</Text>
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
        backgroundColor: 'DarkCyan'
    },
    btn2: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: 'DarkCyan'
    },
    btn3: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: 'DarkCyan'
    },
    btn4: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: 'DarkCyan'
    }
})

