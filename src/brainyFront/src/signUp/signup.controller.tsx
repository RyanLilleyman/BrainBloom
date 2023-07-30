import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CheckBoxNoTouch from "../components/checkboxNoTouch";
import FloatingLabelInput from "../components/FloatingLabelInput";
import { SignUpValidationSchema } from "./signup-validation.schema";
import { useFormik } from "formik";

export interface SignUpProps {}

const SignUpFormController: React.FC<SignUpProps> = () => {
  // const [isLoading, setisLoading] = useState<boolean>(false);
  const [securePasswordTextEntry, setSecurePasswordTextEntry] =
    useState<boolean>(true);
  const [secureConfirmPasswordTextEntry, setSecureConfirmPasswordTextEntry] =
    useState<boolean>(true);

  // const onSubmit = (data: object) => console.log(data);

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
        label="Email"
        isPassword={false}
        value={formik.values.email}
        onChangeText={formik.handleChange}
      />
      {formik.errors.email && <Text>{formik.errors.email}</Text>}

      <FloatingLabelInput
        label="Password"
        isPassword={true}
        value={formik.values.password}
        onChangeText={formik.handleChange}
        secureTextEntry={securePasswordTextEntry}
        setSecureTextEntry={setSecurePasswordTextEntry}
      />
      {formik.errors.password && <Text>{formik.errors.password}</Text>}

      <FloatingLabelInput
        label="Confirm Password"
        isPassword={true}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange}
        secureTextEntry={secureConfirmPasswordTextEntry}
        setSecureTextEntry={setSecureConfirmPasswordTextEntry}
      />
      {formik.errors.confirmPassword && (
        <Text>{formik.errors.confirmPassword}</Text>
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
