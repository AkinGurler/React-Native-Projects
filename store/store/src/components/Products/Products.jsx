import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import storeData from "../../store_data.json"
import ProductCard from '../ProductCard/ProductCard'
import styles from "./Products.style"


const Products = () => {
  return (
    <SafeAreaView  >
      <FlatList
        
        numColumns={2}
        data={storeData}
        renderItem={(item) => < ProductCard product={item} />
        }
      />
    </SafeAreaView>
  )
}

export default Products