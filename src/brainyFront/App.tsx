import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; //
import { StatusBar } from "expo-status-bar"; //
import { PaperProvider } from "react-native-paper";

import SignIn1 from "./src/signIn/signIn1.view";
// import SignIn2 from "./src/signIn/signIn2.view";
import LoadingScreen from "./src/loading/loading.view";
import SignupForm from "./src/signUp/signup.view";
import MainView from "./src/mainPage/mainpage.view";

const Stack = createStackNavigator(); //

/**
 * Renders the main application component.
 *
 * @return {ReactNode} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="SignIn1" component={SignIn1} />
          <Stack.Screen name="SignUpForm" component={SignupForm} />
          <Stack.Screen name="MainView" component={MainView} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
