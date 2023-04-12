import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Jobs from './pages/Jobs';
import FavouriteJobs from './pages/FavouriteJobs';
import JobDetails from './pages/JobDetails';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Job List" component={Jobs} />
      <Stack.Screen name="Job Details" component={JobDetails} />
    </Stack.Navigator>
  )
}

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Jobs" component={JobsStack} />
        <Drawer.Screen name="FavouriteJobs" component={FavouriteJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}



export default Router