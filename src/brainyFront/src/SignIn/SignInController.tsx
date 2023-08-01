import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import Separator from "../Components/Separator";
import { Colors, Sizes } from "../Components/Separator";
import { TextInput } from "react-native-paper";
import { SignInValidationSchema } from "./SignInValidation";
import { useFormik } from "formik";
export interface SignInProps {
  navigation: any;
}

/**
 * Renders a sign-in form component.
 *
 * @param {React.FC<SignInProps>} SignInProps - The props for the sign-in form
 * @returns {React.ReactNode} The rendered sign-in form component
 */
export const SignInFormController1: React.FC<SignInProps> = ({
  navigation,
}) => {
  const [securePasswordTextEntry, setPasswordTextEntry] =
    useState<boolean>(true);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignInValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigation.replace("MainView");
      // Handle form submission here
    },
  });
  const styles = StyleSheet.create({
    box: {
      backgroundColor: "#034d59", //rgba(2, 60, 73, 1),rgba(0, 193, 190, 0.5),rgba(173, 227, 226, 1)
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#00c1bd", //#03363D
      width: 200,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    text: { color: "#F5F5F5", fontSize: 22, textAlign: "center" },
    inputContainerStyle: {
      backgroundColor: "#023e4a",
      color: "#F5F5F5",
      width: 250,
      margin: 8,
    },
    noPaddingInput: {
      backgroundColor: "transparent",
      paddingHorizontal: 0,
      background: "white",
    },
    fontSize: {
      fontSize: 18,
      textAlign: "auto",
      color: "#F5F5F5",
      background: "white",
    },
    checkText: {
      color: "#F5F5F5",
    },
  });
  //()=>formik.handleSubmit(undefined), also switch from navigate to replace
  return (
    <View style={styles.box}>
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Email..."
        value={formik.values.email}
        onChangeText={(text) => {
          formik.setFieldValue("email", text);
        }}
        activeOutlineColor="white"
        placeholderTextColor="white"
        outlineColor="white"
        textColor="white"
        selectionColor="white"
        theme={{
          colors: {
            onSurfaceVariant: "white",
          },
        }}
      />
      {formik.errors.email && (
        <Text style={styles.checkText}>{formik.errors.email}</Text>
      )}
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Password..."
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        secureTextEntry={securePasswordTextEntry}
        activeOutlineColor="white"
        placeholderTextColor="white"
        outlineColor="white"
        textColor="white"
        selectionColor="white"
        right={
          <TextInput.Icon
            icon={securePasswordTextEntry ? "eye-off" : "eye"}
            color="white"
            onPress={() => setPasswordTextEntry(!securePasswordTextEntry)} 
          />
        }
        theme={{
          colors: { onSurfaceVariant: "white" },
        }}
      />
      {formik.errors.password && (
        <Text style={styles.checkText}>{formik.errors.password}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => formik.handleSubmit(undefined)}
      >
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <Separator label="Or" color={Colors.White} fontSize={Sizes.Large} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUpForm")}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInFormController1;
