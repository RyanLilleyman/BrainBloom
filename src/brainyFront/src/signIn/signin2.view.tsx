import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import SignInFormController from "./signin.controller";

export interface SignInProps {
  navigation: any;
}
const SignIn2: React.FC<SignInProps> = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(173, 227, 226, 1)", //rgba(244, 246, 243, 1),rgba(2, 60, 73, 1)
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
        >
          <SignInFormController navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn2;
