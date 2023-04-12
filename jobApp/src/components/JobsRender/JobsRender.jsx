import { View, Text, FlatList } from 'react-native'
import React from 'react'
import JobCard from '../JobCard/JobCard'

const JobsRender = ({ data, isRemoveButton, navigation }) => {
    

    const navigateJobDetails = (job) => {
        navigation.navigate("Job Details", { jobDetails: job })
    }

    const handleRender = ({ item }) => (
        <JobCard job={item} navigateJobDetails={navigateJobDetails}
        isRemoveButton={isRemoveButton} />
    )

    return (
        <View>
            <FlatList
                data={data}
                renderItem={handleRender}
            />
        </View>
    )
}

export default JobsRender