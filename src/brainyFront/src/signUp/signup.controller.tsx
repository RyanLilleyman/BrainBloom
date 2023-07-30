import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Controller, useForm } from "react-hook-form"; //
import CheckBoxNoTouch from "../components/checkboxNoTouch";
import FloatingLabelInput from "../components/FloatingLabelInput";
import { FieldValues } from "react-hook-form";

export interface SignUpProps {}



const SignUpFormController: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [lengthCheck, setLengthCheck] = useState<boolean>(false);
  const [capitalCheck, setCapitalCheck] = useState<boolean>(false);
  const [specialCheck, setSpecialCheck] = useState<boolean>(false);
  const [lowerCheck, setLowerCheck] = useState<boolean>(false);
  const [numberCheck, setnumberCheck] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<FieldValues, any, undefined>();
  const [securePasswordTextEntry, setSecurePasswordTextEntry] =
    useState<boolean>(true);
  const [secureConfirmPasswordTextEntry, setSecureConfirmPasswordTextEntry] =
    useState<boolean>(true);

  const onSubmit = (data: object) => console.log(data);

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

  useEffect(() => {
    console.log(
      lengthCheck,
      capitalCheck,
      specialCheck,
      lowerCheck,
      numberCheck
    );
  }, [lengthCheck, capitalCheck, specialCheck, lowerCheck, numberCheck]);

  const calculatePasswordStrength = (password: string) => {
    let strengthCounter = 0;
    setCapitalCheck(false);
    setSpecialCheck(false);
    setLowerCheck(false);
    setnumberCheck(false);
    setLengthCheck(false);

    if (password.length >= 8) {
      strengthCounter++;
      setLengthCheck(true);
    }
    if (/[A-Z]/.test(password)) {
      strengthCounter++;
      setCapitalCheck(true);
    }
    if (/[a-z]/.test(password)) {
      strengthCounter++;
      setLowerCheck(true);
    }
    if (/[0-9]/.test(password)) {
      strengthCounter++;
      setnumberCheck(true);
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      strengthCounter++;
      setSpecialCheck(true);
    } // checks for special characters

    return strengthCounter;
  };

  const weakToStrong = (strength: number) => {
    if (strength === 0) {
      console.log(strength);
      return "nothing";
    } else if (strength === 1) {
      console.log(strength);
      return "very weak";
    } else if (strength === 2) {
      console.log(strength);
      return "weak";
    } else if (strength === 3) {
      console.log(strength);
      return "medium";
    } else if (strength === 4) {
      console.log(strength);
      return "strong";
    } else if (strength === 5) {
      return "very strong";
    }
  };

  const isValidEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleChange = useCallback((text: string) => {
    setPassword(text);
    setPasswordStrength(calculatePasswordStrength(text));
  }, []);

  const setSubmit = useCallback(() => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!password) {
      alert("Passwords cannot be empty.");
      return;
    }
    if (!email) {
      alert("Email cannot be empty.");
      return;
    }
    if (passwordStrength < 3) {
      alert("Password is too weak.");
      return;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCapitalCheck(false);
      setSpecialCheck(false);
      setLowerCheck(false);
      setnumberCheck(false);
      setLengthCheck(false);
      setPasswordStrength(0);
      console.log(`Email: ${email}, Password: ${password}`);
      // Make your API call here
    }
  }, [email, password, passwordStrength, confirmPassword]);

  return (
    <View style={styles.box}>
      <Controller
        control={control}
        render={({ field: { onBlur } }) => (
          <FloatingLabelInput
            label="Email"
            isPassword={false}
            value={email}
            onChangeText={setEmail}
            onBlur={onBlur}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onBlur } }) => (
          <FloatingLabelInput
            label="Password"
            isPassword={true}
            value={password}
            onChangeText={handleChange}
            onBlur={onBlur}
            secureTextEntry={securePasswordTextEntry}
            setSecureTextEntry={setSecurePasswordTextEntry}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onBlur } }) => (
          <FloatingLabelInput
            label="Confirm Password"
            isPassword={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onBlur={onBlur}
            secureTextEntry={secureConfirmPasswordTextEntry}
            setSecureTextEntry={setSecureConfirmPasswordTextEntry}
          />
        )}
        name="confirm-password"
        rules={{ required: true }}
        defaultValue=""
      />

      {passwordStrength > 0 && (
        <Text style={styles.checkText}>
          Password Strength: {weakToStrong(passwordStrength)}
        </Text>
      )}
      <View style={styles.inLineContainer}>
        <View style={styles.inLine}>
          <CheckBoxNoTouch mT={2} mB={2} isSelected={lengthCheck} />
          <Text style={styles.checkText}> Minimum 8 Characters</Text>
        </View>
        <View style={styles.inLine}>
          <CheckBoxNoTouch mT={2} mB={2} isSelected={capitalCheck} />
          <Text style={styles.checkText}> Contains Capital Letter</Text>
        </View>
        <View style={styles.inLine}>
          <CheckBoxNoTouch mT={2} mB={2} isSelected={specialCheck} />
          <Text style={styles.checkText}> Contains Special Character</Text>
        </View>
        <View style={styles.inLine}>
          <CheckBoxNoTouch mT={2} mB={2} isSelected={lowerCheck} />
          <Text style={styles.checkText}> Contains Lower Case Character</Text>
        </View>
        <View style={styles.inLine}>
          <CheckBoxNoTouch mT={2} mB={2} isSelected={numberCheck} />
          <Text style={styles.checkText}> Contains Number</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={setSubmit}>
        <Text style={styles.text4}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpFormController;