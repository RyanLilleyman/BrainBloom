import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import SignUpFormController from "./SignUpController";

interface SignupFormProps {}

const SignUp: React.FC<SignupFormProps> = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
      backgroundColor: "rgba(173, 227, 226, 1)",
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SignUpFormController />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
