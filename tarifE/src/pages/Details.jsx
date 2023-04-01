import React from 'react'
import { SafeAreaView, Text, ActivityIndicator, StyleSheet, Dimensions,Image } from "react-native"
import useFetch from '../components/CustomHooks/useFetch/UseFetch'
import { FlatList } from 'react-native-gesture-handler'
import MealDetails from '../components/MealDetails/MealDetails'
import Loading from '../components/Loading/Loading'
const Details = ({ route }) => {
  const { id: mealId } = route.params
  const { data:{meals}, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)



  const renderMeal=({item}) => <MealDetails meal={item}  />

  if (loading) {
  return <Loading />
  }


  return (
    <SafeAreaView>
     <FlatList
     data={meals}
     renderItem={renderMeal}
     />

    </SafeAreaView>
  )
}




export default Details