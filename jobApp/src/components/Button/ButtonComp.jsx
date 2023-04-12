import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComp = ({ handleClick, text, }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleClick()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c40c30",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  }

})