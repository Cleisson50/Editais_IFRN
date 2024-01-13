import * as React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.campus}>
            <Pressable style={style.btn1} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital 2010</Text>
                </View>
            </Pressable>
            <Pressable style={style.btn2} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital 2011</Text>
                </View>
            </Pressable>
            <Pressable style={style.btn3} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital 2012</Text>
                </View>
            </Pressable>
            <Pressable style={style.btn4} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital 2013</Text>
                </View>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create({
    campus: {
        backgroundColor: '#8FBC8F',
        flex: 1,
    },
    btn1: {
        marginTop: 40,
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#008B8B'
    },
    btn2: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#008B8B'
    },
    btn3: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#008B8B'
    },
    btn4: {
        marginBottom: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#008B8B'
    }
})

