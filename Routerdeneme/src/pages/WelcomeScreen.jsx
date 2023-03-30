import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const WelcomeScreen = ({navigation}) => {

    function goToMemberSign(){
        navigation.navigate("MemberSignScreen");
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.header}>
                Keyf-i Fitness 
            </Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",


    },
    header: {
        color: "black",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10,

    }
})

export default WelcomeScreen