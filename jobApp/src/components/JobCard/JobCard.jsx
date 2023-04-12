import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../Button/ButtonComp'
import { useDispatch } from 'react-redux';

const JobCard = ({ job, navigateJobDetails, isRemoveButton }) => {
  
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch({ type: "REMOVE_FAVOURITE", payload:job.id })
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateJobDetails(job)}>
        <Text style={styles.name}>{job.name}</Text>
        <Text style={styles.category}>{job.categories[0].name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>{job.locations[0].name}</Text>
        </View>

        <Text style={styles.level}>{job.levels[0].name}</Text>


      </TouchableOpacity>
      <View style={styles.button_container} >
        {isRemoveButton && <Button handleClick={handleRemove} text="Remove" />}
      </View>

    </View>

  )
}

export default JobCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 5,
    padding: 10,

  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  category: {
    fontSize: 15,
    color: "black",
  },
  location_container: {
    flexWrap: "wrap"
  },
  location: {

    padding: 5,
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,

  },
  level: {
    textAlign: "right",
    color: "red"
  },
  button_container: {

  }


})