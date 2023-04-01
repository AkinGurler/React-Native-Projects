import React from 'react'
import { SafeAreaView, View, Image, Text, StyleSheet, Dimensions, Pressable,Button,Linking } from 'react-native'

const MealDetails = ({ meal: { strMeal: name, strMealThumb: imageUrl, strYoutube: youtubeLink, strInstructions, strArea: country } }) => {


  const openYoutube=(link)=> Linking.openURL(link)
  return (
    <SafeAreaView style={styles.container}>


      
      <Image
        style={styles.image}
        source={{
          uri: imageUrl
        }}

      />
      <View style={styles.textContainer}>
        <View style={styles.textHead}>
          <Text style={styles.name}>
            {name}
          </Text>
          <Text style={styles.area}>
            {country}
          </Text>
        </View>

        <Text style={styles.instruction}>
          {strInstructions}
        </Text>
      </View>

        <Button
        onPress={()=>openYoutube(youtubeLink)}
        title='Watch From Youtube'
        color="red"
        />
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin:10,
  },
  image: {
    height: Dimensions.get("window").height / 2.5
  },
  textContainer: {
    backgroundColor: "#bae8c6"
  },
  name: {
    color: "#873b72",
    fontSize: 20
  },
  area: {
    color: "#873b72",
    fontSize: 12
  },
  instruction: {
    color: "black",
    fontSize: 10
  },
  textHead:{
    borderBottomColor:"gray",
    borderBottomWidth:1
  },
  button:{
    
    borderRadius:10,
    backgroundColor:"red",
    width:Dimensions.get("window").width/2
  },
  buttonText:{

  }
})

export default MealDetails
