import React from 'react'
import {SafeAreaView,View,Text} from "react-native"

const MemberResult = ({route}) => {
    const {user:{userName,userSurName,userAge,userEmail}}=route.params;
    return (
        <SafeAreaView>
        <Text>Üye Adı :{userName} </Text>
        <Text>Üye Soyadı : {userSurName} </Text>
        <Text>Üye Age : {userAge}  </Text>
        <Text>Üye Email : {userEmail} </Text>
        </SafeAreaView>
    )
}

export default MemberResult