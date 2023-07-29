import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Controller, useForm } from "react-hook-form"; //
import FloatingLabelInput from "../../universal-components/FloatingLabelInput";
import Separator from "../../universal-components/Separator";
import { Colors, Sizes } from "../../universal-components/Separator"; //
import { FieldValues } from "react-hook-form";

interface SignInProps {
  navigation: any;
}
const SignIn2: React.FC<SignInProps> = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const { control, handleSubmit } = useForm<FieldValues, any, undefined>();
  const onSubmit = (data: object) => console.log(data);

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
    box: {
      backgroundColor: "rgba(2, 60, 73, 1)", //rgba(2, 60, 73, 1),rgba(0, 193, 190, 0.5)
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
  });

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.box}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FloatingLabelInput
                  label="Email"
                  isPassword={false}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FloatingLabelInput
                  label="Password"
                  isPassword={true}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry={secureTextEntry}
                  setSecureTextEntry={setSecureTextEntry}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit(onSubmit)}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn2;
