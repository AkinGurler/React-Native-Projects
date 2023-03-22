import React from 'react'
import { Button, Pressable, SafeAreaView, Text, TextInput } from 'react-native'
import styles from "./InputCard.style"


const InputCard = ({addNewTodo,newTodo,setNewTodo}) => {

  
  return (
    <SafeAreaView style={styles.card_container}>
            <TextInput
            style={styles.input}
            value={newTodo}
            onChangeText={text => setNewTodo(text)}
            placeholder="To Do"
            />
      <Pressable
      disabled={newTodo === "" ? true : false}
      style={[styles.save_button, newTodo===""? styles.button_disable : styles.button_enable]}
      onPress={()=> {addNewTodo(newTodo)}}
      >
        <Text style={styles.button_text} >Save</Text>
      </Pressable>
            
    </SafeAreaView>
  )
}

export default InputCard