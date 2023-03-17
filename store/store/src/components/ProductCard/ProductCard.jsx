import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import styles from "./ProductCard.style.js"

const ProductCard = ({ product }) => {
  const { index, item: { title, id, imgURL, price, inStock } } = product
  console.log(product)
  return (
    <SafeAreaView style={styles.product_container} >
      <View style={styles.img_container}> 
        <Image
          style={styles.img}
          source={{
            uri:
              imgURL
          }} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>
        {price}
      </Text >
      {
        inStock === false ? 
        <Text style={styles.stock} >Stok yok</Text>
        :null
      }

    </SafeAreaView>
  )
}

export default ProductCard