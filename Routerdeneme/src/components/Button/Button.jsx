import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from "./Button.style"

const Button = ({text,onPress}) => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default Button