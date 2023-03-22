import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import InputCard from './InputCard/InputCard'
import ToDoCard from './ToDoCard'


const todoList = [
  { id: 1, Name: "Learn React Native", completed: false },
  { id: 2, Name: "Do smt", completed: true }
]



function App() {
  const [list, setList] = useState(todoList)
  const [counter, setCounter] = useState(todoList.length)
  const [newTodo, setNewTodo] = useState("")

    useEffect(() => {
      setCounter(list.length)
    
     
    }, [list])
    
  const addNewTodo=(title)=>{

    setList([...list,{id:Date.now(),Name:title,completed:false}])
    console.log(list)
    setNewTodo("");
    
  }

  const markCompleted=(id)=>{
    setList(list.map(clickedToDo=>(
      clickedToDo.id===id ? {...clickedToDo,completed:!clickedToDo.completed}: clickedToDo
    )))
  }
  const deleteLongPress=(id)=>{
    setList(list.filter(longPressedToDo=>(
      longPressedToDo.id!==id  
    )))
  }

  return (
    <SafeAreaView style={styles.container} >
      <View>
        <View style={styles.headers_container} >
          <Text style={styles.headers} >Yapılacaklar</Text>
          <Text style={styles.headers} >{counter} </Text>
        </View>
        <ToDoCard todoList={list} markCompleted={markCompleted} deleteLongPress={deleteLongPress} />
      </View>
      <InputCard newTodo={newTodo} addNewTodo={addNewTodo} setNewTodo={setNewTodo}/>

    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#102027",
    flex:1,
    justifyContent:"space-between",
    

  },
  headers_container: {
    /*  display:'flex', */
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  headers: {
    fontWeight: "bold",
    fontSize: 40,
    color: "orange"

  }
})