import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native"
import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/Products";

import SearchBar from "./components/SearchBar/SearchBar";


function App() {

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.heading}>INFLUX STORE</Text>
      <SearchBar />
      <Products />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1  
  },
  heading: {
    fontSize: 20,
    color: "red",
    textAlign: "center"
  }
})

export default App