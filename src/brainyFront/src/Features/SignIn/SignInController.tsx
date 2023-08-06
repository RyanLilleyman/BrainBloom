import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import Separator from "../../Components/Separator";
import { Colors, Sizes } from "../../Components/Separator";
import { TextInput } from "react-native-paper";
import { SignInValidationSchema } from "./SignInValidation";
import { useFormik } from "formik";
import { UserModel } from "../../Services/UserService/UserModel";
import { UserDto } from "../../Services/UserService/UserDto";
import MainView from "../../Features/MainPage/MainPageView";

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
    /**
     * Handles the form submission.
     *
     * @param {UserDto} values - The values submitted in the form.
     */
    onSubmit: (values: UserDto) => {
      console.log(values);
      // UserModel.signIn(values, navigation);
      // Handle form submission here
    },
  });
  type Styles = {
    box: ViewStyle;
    button: ViewStyle;
    text: TextStyle;
    inputContainerStyle: ViewStyle;
    noPaddingInput: ViewStyle;
    fontSize: TextStyle;
    checkText: TextStyle;
  };
  const styles = StyleSheet.create<Styles>({
    box: {
      backgroundColor: "#034d59", //rgba(2, 60, 73, 1),rgba(0, 193, 190, 0.5),rgba(173, 227, 226, 1)
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000", // Adding shadows for a more elevated look
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    button: {
      backgroundColor: "#008a95", //#03363D
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
    },
    fontSize: {
      fontSize: 18,
      textAlign: "auto",
      color: "#F5F5F5",
    },
    checkText: {
      color: "#F5F5F5",
    },
  });
  //need to implement error response from the server
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
        onPress={() => navigation.navigate("MainView")}
      >
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <Separator label="or" color={Colors.White} fontSize={Sizes.Large} />
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
