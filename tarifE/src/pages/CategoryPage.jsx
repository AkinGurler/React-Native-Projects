import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, FlatList, ActivityIndicator,View } from 'react-native'
import CategoryCard from '../components/CategoryCard'
import useFecth from '../components/CustomHooks/useFetch/UseFetch'

const CategoryPage = ({navigation}) => {

  const APIURL = process.env.REACT_APP_API_URL
 const {error,data,loading}=useFecth(`${APIURL}/categories.php`)
 
 const showCategoriesFoods=(categoryName)=>(
  navigation.navigate("Meals",{categoryName})
 )

  const renderCategories = ({ item }) => {
    return <CategoryCard category={item} showCategoriesFoods={showCategoriesFoods} />
  }
  
  return (
    <SafeAreaView>
      <View>
        { loading===true ?  <ActivityIndicator size="large"/>  :
          <FlatList
            data={data.categories}
            renderItem={renderCategories}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default CategoryPage