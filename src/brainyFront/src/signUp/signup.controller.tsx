import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SignUpValidationSchema } from "./signup-validation.schema";
import { useFormik } from "formik";
import { TextInput } from "react-native-paper";

const SignUpFormController: React.FC = () => {
  // const [isLoading, setisLoading] = useState<boolean>(false);
  const styles = StyleSheet.create({
    inLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      resizeMode: "cover",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "rgba(2, 60, 73, 1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    inLineContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    button: {
      width: 150,
      backgroundColor: "rgba(0, 193, 190, 0.5)",
      marginVertical: 15,
      marginHorizontal: 10,
      marginBottom: 25,
      borderRadius: 10,
      padding: 10,
    },
    text4: {
      color: "#F5F5F5",
      fontSize: 22,
      textAlign: "center",
      opacity: 1,
      marginHorizontal: 10,
    },
    checkText: {
      color: "#F5F5F5",
    },
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

  const [securePasswordTextEntry, setSecurePasswordTextEntry] =
    useState<boolean>(true);
  const [secureConfirmPasswordTextEntry, setSecureConfirmPasswordTextEntry] =
    useState<boolean>(true);

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: SignUpValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
    },
  });
  return (
    <View style={styles.box}>
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Email..."
        value={formik.values.email}
        onChangeText={(text: string) => formik.handleChange("email")(text)}
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
        onChangeText={(text: string) => formik.handleChange("password")(text)}
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
            onPress={() =>
              setSecureConfirmPasswordTextEntry(!secureConfirmPasswordTextEntry)
            }
          />
        }
        theme={{
          colors: {
            onSurfaceVariant: "white",
          },
        }}
      />
      {formik.errors.password && (
        <Text style={styles.checkText}>{formik.errors.password}</Text>
      )}
      <TextInput
        mode="outlined"
        style={[styles.inputContainerStyle, styles.fontSize]}
        label="Confirm Password..."
        value={formik.values.confirmPassword}
        onChangeText={(text: string) =>
          formik.handleChange("confirmPassword")(text)
        }
        secureTextEntry={secureConfirmPasswordTextEntry}
        activeOutlineColor="white"
        placeholderTextColor="white"
        outlineColor="white"
        textColor="white"
        selectionColor="white"
        right={
          <TextInput.Icon
            icon={securePasswordTextEntry ? "eye" : "eye-off"}
            color="white"
            onPress={() => setSecurePasswordTextEntry(!securePasswordTextEntry)}
          />
        }
        theme={{
          colors: {
            onSurfaceVariant: "white",
          },
        }}
      />
      {formik.errors.confirmPassword && (
        <Text style={styles.checkText}>{formik.errors.confirmPassword}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => formik.handleSubmit(undefined)}
      >
        <Text style={styles.text4}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpFormController;
