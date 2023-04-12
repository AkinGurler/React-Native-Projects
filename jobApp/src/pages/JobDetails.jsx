import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Button from '../components/Button/ButtonComp'
import RenderHtml from 'react-native-render-html';
import { useDispatch } from 'react-redux';


const JobDetails = ({ route }) => {


  const { jobDetails } = route.params





  const dispatch = useDispatch()

  const addFav = async () => {
    dispatch({ type: 'ADD_FAVOURITE', payload: jobDetails })
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.job_name}>{jobDetails.name}</Text>
        <Text style={styles.sub_title_black} >
          <Text style={styles.sub_title_red}>Location:</Text>
          {jobDetails.locations[0].name}</Text>
        <Text style={styles.sub_title_black}><Text style={styles.sub_title_red}>Job Level:</Text> {jobDetails.levels[0].name}</Text>
      </View>
      <View>
        <Text style={styles.detail_hader} >Job Detail</Text>

        <RenderHtml
          contentWidth={Dimensions.get('window').width}
          source={{ html: jobDetails.contents }}
          baseStyle={styles.detail_container}
        />
      </View>
      <View style={styles.button_container} >
        <Button text="Submit" />
        <Button text="FavoriteJobs" handleClick={addFav} />
      </View>


    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 5
  },
  job_name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  sub_title_red: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold"
  },
  sub_title_black: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
  detail_hader: {
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontWeight: "bold"
  },
  detail_container: {
    padding: 5,
    borderWidth: 1,
    backgroundColor: "white",
    color: "black"
  },
  button_container: {
    marginVertical: 5,
    flexDirection: "row",
    gap: 5,

  }
})

export default JobDetails