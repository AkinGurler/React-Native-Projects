import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'


const Button = ({ handleLogin,/* loading */ }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                /* disabled={loading} */
            >
                <Text style={styles.text} >
                    Login
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    button: {
        backgroundColor: "#88cbf2",
        width: Dimensions.get("window").width / 2,
        height:40,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    }
})

export default Button
