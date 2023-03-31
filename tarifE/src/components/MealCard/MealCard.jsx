import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet,Dimensions,View ,Pressable} from 'react-native'

const MealCard = ({ meal: { strMeal: name, strMealThumb: image, idMeal },showMealDetail }) => {
  return (
    <Pressable 
    style={styles.container}
    onPress={()=>showMealDetail(idMeal)}
    >

      <Image
        style={styles.image}
        source={{
          uri: image
        }}>
      </Image>
      <View style={styles.titleView}>
        <Text style={styles.textTitle}>
        {name}
      </Text>
      </View>
      

    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginVertical: 5,
    justifyContent:"flex-end"
  },
  image: {
    height: 200,
    width: Dimensions.get('screen').width - 22,
    borderRadius:20,
  },
  titleView:{
    position: 'absolute',
    width: Dimensions.get('screen').width - 22,
    backgroundColor: '#000000c0',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textTitle: {
    color: '#a6e3e9',
    fontSize: 20,
    textAlign: 'right',
    margin: 7
  }
})


export default MealCard