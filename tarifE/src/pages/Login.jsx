import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View,Alert } from 'react-native'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import { Formik } from 'formik';
import usePost from "../components/CustomHooks/usePost"

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {data,error,loading,handlePost} = usePost();

    const handleLogin = (values) => {
         console.log("handle login calisti")
        handlePost("https://fakestoreapi.com/auth/login",values)
    }
       
        

    if(error) {
        Alert.alert("Girişte hata var dostum bi bak")
    }

    if(data) {
        console.log(data)
    }

    return (

        <Formik
            initialValues={{ userName: "", password: "" }}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <View style={styles.image_container}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/cooking.png")}
                        />
                    </View>
                    
                    <Input placeholder="User Name" value={values.userName} onChange={handleChange("userName")} iconName="account" />
                    <Input placeholder="Password" value={values.password} onChange={handleChange("password")} iconName="key"/>

                    <Button handleLogin={handleSubmit} /* loading={loading} *//>
                </View>
            )}


        </Formik >



    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        gap: 5,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain",

    },
    image_container: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Login
