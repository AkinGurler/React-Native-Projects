import React, { useState } from 'react'
import { SafeAreaView, Text } from "react-native"
import Button from '../components/Button'
import Input from '../components/Input'

const MemberSign = ({navigation}) => {
    const [userName, setUserName] = useState("")
    const [userSurName, setUserSurName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [userEmail, setUserEmail] = useState("")

    function handleSubmit() {

        const user = {
            userName,
            userSurName,
            userAge,
            userEmail,
        }
        console.log(user)
        navigation.navigate("MemberResulScreen",{user})
    }

    return (
        <SafeAreaView>
            <Text>Member Sign</Text>
            <Input label="Member Name" placeholder="Enter Member Name" onChangeText={setUserName} />
            <Input label="Member Surname" placeholder="Enter Member Surname" onChangeText={setUserSurName} />
            <Input label="Member Age" placeholder="Enter Member Age" onChangeText={setUserAge} />
            <Input label="Member E-mail" placeholder="Enter Member E-mail" onChangeText={setUserEmail} />
            <Button text="Save" onPress={handleSubmit} />


        </SafeAreaView>
    )
}

export default MemberSign