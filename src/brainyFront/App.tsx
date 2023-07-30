import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";//
import { StatusBar } from "expo-status-bar";//

import SignIn2 from "./src/signIn/signin2.view";
import LoadingScreen from "./src/loading/loading.view";
import SignupForm from "./src/signUp/signup.view";

const Stack = createStackNavigator();//

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}  
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="SignIn2" component={SignIn2} />
        <Stack.Screen name="SignUpForm" component={SignupForm} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
