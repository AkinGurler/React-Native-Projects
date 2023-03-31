import React from 'react'
import { SafeAreaView, Text,FlatList } from 'react-native'
import useFetch from '../components/CustomHooks/useFetch/UseFetch'
import MealCard from '../components/MealCard'

const Meals = ({ route,navigation }) => {
  const { categoryName } = route.params
  const baseURL = process.env.REACT_APP_API_URL

  const { data, error, loading } = useFetch(`${baseURL}/filter.php?c=${categoryName}`)
 
  const renderMeals = ({ item }) =>{
   console.log("render mmeals worked")
   return <MealCard meal={item} showMealDetail={showMealDetail} />
  }
    
  const showMealDetail=(id) => (
    navigation.navigate("Details",{id})
  )
  

  return (
    <SafeAreaView>
      <Text>
      
        {categoryName}
      </Text>
      <FlatList
        data={data.meals}
        renderItem={renderMeals}
       /*  keyExtractor={item=>item.idMeal} */
      />

    </SafeAreaView>
  )
}

export default Meals