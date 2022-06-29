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
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn2: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn3: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    },
    btn4: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    }
})

