import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobCard from '../components/JobCard/JobCard'
import JobsRender from '../components/JobsRender/JobsRender'
import AsyncStorage from '@react-native-async-storage/async-storage';


const FavouriteJobs = ({ navigation }) => {

  const [storageValeus, setStorageValeus] = useState()

  dispatch = useDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('favJobs')
      setStorageValeus([JSON.parse(value)])
    } catch (e) {

    }
  }
  const FavJobs = useSelector(state => state.favouriteJobs)

  useEffect(() => {
    getData()
  }, [])


  return (
    <View>

      <JobsRender data={FavJobs} isRemoveButton={true} navigation={navigation} />
    </View>
  )
}

export default FavouriteJobs