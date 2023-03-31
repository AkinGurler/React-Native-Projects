import React from 'react'
import { SafeAreaView, Text, ActivityIndicator } from "react-native"
import useFetch from '../components/CustomHooks/useFetch/UseFetch'
const Details = ({ route }) => {
  const { id: mealId } = route.params
  const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

  if (loading) {
  return <ActivityIndicator size="large" />
  }

  return (
    <SafeAreaView>
      <Text>
        asafaslf
      </Text>

    </SafeAreaView>
  )
}

export default Details