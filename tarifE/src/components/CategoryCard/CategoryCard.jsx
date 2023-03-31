import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'

const CategoryCard = ({showCategoriesFoods,category: {strCategory: name, strCategoryThumb: image } }) => {

  

  return (
    <SafeAreaView style={styles.container}>

       <TouchableWithoutFeedback onPress={()=>showCategoriesFoods(name)} >
        <View style={styles.card_container}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }} />
          <Text style={styles.text}  >
            {name}
          </Text>
        </View>
      </TouchableWithoutFeedback> 



    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange"
  },
  card_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#ba9e9c",
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    gap: 10
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: 20,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "black"
  }
})
export default CategoryCard