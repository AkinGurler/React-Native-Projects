import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch/useFetch'
import Loading from '../components/Loading/Loading';
import JobsRender from '../components/JobsRender/JobsRender';

const Jobs = ({ navigation }) => {
 

  const { data, err, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData("https://www.themuse.com/api/public/jobs?page=1")
  }, [])



  if (loading) {
    return <Loading />
  }


  return (
    <View>
      <JobsRender data={data} navigation={navigation} />
    </View>
  )
}

export default Jobs