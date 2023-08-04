import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; //
import { StatusBar } from "expo-status-bar"; //
import * as reactNativePaper from "react-native-paper";

import SignIn1 from "./src/Features/SignIn/SignInView";
import LoadingScreen from "./src/Features/Loading/LoadingLogoView";
import SignupForm from "./src/Features/SignUp/SignUpView";
import MainView from "./src/Features/MainPage/MainPageView";

const Stack = createStackNavigator(); //
/**
 * Renders the main application component.
 *
 * @return {ReactNode} The rendered application component.
 */
const App: React.FC = () => {
  return (
    <reactNativePaper.PaperProvider>
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
    </reactNativePaper.PaperProvider>
  );
};

export default App;
