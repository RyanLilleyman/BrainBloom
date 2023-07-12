import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";



import SignUp from "./screens/signUp/signup";
import LoadingScreen from "./screens/loading/loading";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;