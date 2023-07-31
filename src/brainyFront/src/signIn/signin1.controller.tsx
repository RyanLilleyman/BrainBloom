import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Separator from "../components/Separator";
import { Colors, Sizes } from "../components/Separator"; //
import { TextInput } from "react-native-paper";
import { SignInValidationSchema } from "./siginin-validation.schema";
import { useFormik } from "formik";

export interface SignInProps {
  navigation: any;
}

export const SignInFormController1: React.FC<SignInProps> = ({
  navigation,
}) => {
  const [securePasswordTextEntry, setPasswordTextEntry] =
    useState<boolean>(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = StyleSheet.create({
    box: {
      backgroundColor: "rgba(2, 60, 73, 1)", //rgba(2, 60, 73, 1),rgba(0, 193, 190, 0.5),rgba(173, 227, 226, 1)
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "rgba(0, 193, 190, 0.5)", //#03363D
      width: 200,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    text: { color: "#F5F5F5", fontSize: 22, textAlign: "center" },
    inputContainerStyle: {
      backgroundColor: "rgba(2, 60, 73, 1)",
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
      color: "#F5F5F5",
      background: "white",
    },
  });
  return (
    <View style={styles.box}>
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Email..."
        value={email}
        onChangeText={setEmail}
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
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Password..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry={securePasswordTextEntry}
        activeOutlineColor="white"
        placeholderTextColor="white"
        outlineColor="white"
        textColor="white"
        selectionColor="white"
        right={
          <TextInput.Icon
            icon={securePasswordTextEntry ? "eye" : "eye-off"}
            color="white"
            onPress={() => setPasswordTextEntry(!securePasswordTextEntry)}
          />
        }
        theme={{
          colors: {
            onSurfaceVariant: "white",
          },
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
