import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";


import SignIn2 from "./screens/SignIn/signin2";
import LoadingScreen from "./screens/loading/loading";
import SignupForm from "./screens/SignUp/signup";

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
        <Stack.Screen name="SignIn2" component={SignIn2} />
        <Stack.Screen name="SignUpForm" component={SignupForm} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;