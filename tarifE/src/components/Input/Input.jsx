import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Input = ({ placeholder, value, onChange, iconName }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
      <Icon name={iconName} size={20} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    /* justifyContent: "space-between", */
    borderWidth: 1,
    paddingHorizontal:10,
  },
  input: {
    flex: 1
  }
})

export default Input
