import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form"; //
import FloatingLabelInput from "../components/FloatingLabelInput";
import Separator from "../components/Separator";
import { Colors, Sizes } from "../components/Separator"; //
import { FieldValues } from "react-hook-form";
import {
  TextInput,
  useTheme,
} from "react-native-paper";

export interface SignInProps {
  navigation: any;
}

export const SignInFormController1: React.FC<SignInProps> = ({
  navigation,
}) => {
  const [secureEmailTextEntry, setEmailTextEntry] = useState<boolean>(true);
  const [securePasswordTextEntry, setPasswordTextEntry] = useState<boolean>(
    true
  )
  const { control, handleSubmit } = useForm<FieldValues, any, undefined>();
  const onSubmit = (data: object) => console.log(data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = StyleSheet.create({
    box: {
      backgroundColor: "rgba(173, 227, 226, 1)", //rgba(2, 60, 73, 1),rgba(0, 193, 190, 0.5),rgba(173, 227, 226, 1)
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
    },
    button: {
      backgroundColor: "rgba(0, 193, 190, 0.5)", //#03363D
      width: 200,
      padding: 10,
      margin: 20,
      borderRadius: 10,
    },
    text: { color: "#F5F5F5", fontSize: 22, textAlign: "center" },
    inputContainerStyle: {
      backgroundColor: "rgba(173, 227, 226, 1)",
      width: 200,
      margin: 8,
    },
    noPaddingInput: {
      backgroundColor: "transparent",
      paddingHorizontal: 0,
    },
    fontSize: {
      fontSize: 32,
    },
  });
  return (
    <View style={styles.box}>
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Outlined large font"
        placeholder="Type something"
        value={email}
        onChangeText={setEmail}
        secureTextEntry={secureEmailTextEntry}
        right={
          <TextInput.Icon
            icon={secureEmailTextEntry ? "eye" : "eye-off"}
            onPress={() => setEmailTextEntry(!secureEmailTextEntry)}
          />
        }
      />
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Outlined large font"
        placeholder="Type something"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={securePasswordTextEntry}
        right={
          <TextInput.Icon
            icon={securePasswordTextEntry ? "eye" : "eye-off"}
            onPress={() => setPasswordTextEntry(!securePasswordTextEntry)}
          />
        }
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
