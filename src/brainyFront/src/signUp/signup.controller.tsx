import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FloatingLabelInput from "../components/FloatingLabelInput";
import { SignUpValidationSchema } from "./signup-validation.schema";
import { useFormik } from "formik";


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
      <FloatingLabelInput
        name="email"
        label="Email"
        isPassword={false}
        value={formik.values.email}
        onChangeText={(text: string) => formik.handleChange("email")(text)}
      />

      {formik.errors.email && (
        <Text style={styles.checkText}>{formik.errors.email}</Text>
      )}

      <FloatingLabelInput
        name="password"
        label="Password"
        isPassword={true}
        value={formik.values.password}
        onChangeText={(text: string) => formik.handleChange("password")(text)}
        secureTextEntry={securePasswordTextEntry}
        setSecureTextEntry={setSecurePasswordTextEntry}
      />
      {formik.errors.password && (
        <Text style={styles.checkText}>{formik.errors.password}</Text>
      )}

      <FloatingLabelInput
        name="confirmPassword"
        label="Confirm Password"
        isPassword={true}
        value={formik.values.confirmPassword}
        onChangeText={(text: string) => formik.handleChange("confirmPassword")(text)}
        secureTextEntry={secureConfirmPasswordTextEntry}
        setSecureTextEntry={setSecureConfirmPasswordTextEntry}
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
