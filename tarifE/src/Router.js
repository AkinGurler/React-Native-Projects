import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CategoryPage from "./pages/CategoryPage";
import Details from "./pages/Details";
import Meals from "./pages/Meals";
import Login from "./pages/Login"

const Stack=createStackNavigator();

function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerTitleAlign:"center",
          headerTitleStyle: {color: "#EBB530", fontSize: 20}
          }}>
        <Stack.Screen name="Login Ekranı" component={Login} />
        <Stack.Screen name="Categories" component={CategoryPage}  />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App