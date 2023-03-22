import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from "./ToDoCard.style"




const ToDoCard = ({ todoList,markCompleted,deleteLongPress}) => {

    return (
        <SafeAreaView>
            <FlatList
                data={todoList}
                renderItem={({ item }) => <Item item={item} markCompleted={markCompleted} deleteLongPress={deleteLongPress} />}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>
    )
}


const Item = ({ item,markCompleted,deleteLongPress }) => {
    console.log("mark completed in item ",markCompleted)
    return (
        <View style={item.completed === true ? styles.completed_container : styles.item_container} >
            <Text style={item.completed === true ? styles.completed_title : styles.title} 
            onPress={()=>markCompleted(item.id)}
            onLongPress={()=>deleteLongPress(item.id)}
            >
                {item.Name}
            </Text>
        </View>
    );
}



export default ToDoCard