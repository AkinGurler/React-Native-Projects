import React from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'
import style from "./SearchBar.style"

const SearchBar = () => {
  const [text, setText] = React.useState("Text")


  return (
    <SafeAreaView>
       <TextInput
       style={style.container}
       onChangeText={setText}
       value={text}
       />
    </SafeAreaView>
   
  )
}

export default SearchBar