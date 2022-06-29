import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.campus}>
            <TouchableOpacity style={style.btn} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital Nº XX/XXXX</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital Nº XX/XXXX</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital Nº XX/XXXX</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => { props.navigation.navigate("Edital") }}>
                <View>
                    <Text>Edital Nº XX/XXXX</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    campus: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        padding: 30,
        backgroundColor: '#4AF56F'
    },
    btn: {
        textAlign: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#1A8FDD'
    }
})

