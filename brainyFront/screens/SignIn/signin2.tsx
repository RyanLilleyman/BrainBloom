import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import CheckBox from "../../universal-components/checkBox";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle as RNViewStyle,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";

interface ViewStyle extends RNViewStyle {
  width?: number | string;
  height?: number | string;
}

/**
 * Renders the sign-in screen with an image background and loading text.
 *
 * @return {JSX.Element} The sign-in screen component.
 */
const SignIn2 = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  type Styles = {
    container: ViewStyle;
    separator: ViewStyle;
    image: ViewStyle;
    box: ViewStyle;
    button: any;
    text: any;
    textInput: any;
  };
  
  const toggleSecureEntry = () => {
    setSecureTextEntry((prevSecureTextEntry) => !prevSecureTextEntry);
  };

  const window = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#023c49",
      justifyContent: "center",
      paddingHorizontal: "10%",
      // paddingTop: 20,
    },
    image: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      resizeMode: "cover",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "rgba(0, 193, 190, 0.5)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // minHeight: "70%",
      // minWidth: "50%",
      shadowColor: "#000000",
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      elevation: 20,
      paddingHorizontal: 40,
      paddingVertical: 20,
    },
    separator: {
      height: 1,
      width: "40%",
      marginVertical: 8,
      borderBottomColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
      color: "#F5F5F5",
      fontSize: 22,
      textAlign: "center",
      opacity: 1,
      marginHorizontal: 10,
    },
    text2: {
      color: "#F5F5F5",
      fontSize: 22,
      opacity: 1,
      marginTop: 40,
    },
    text3: {
      color: "#F5F5F5",
      marginRight: 100,
    },
    text4: {
      color: "#F5F5F5",
      fontSize: 22,
      textAlign: "center",
      opacity: 1,
      marginHorizontal: 10,
    },
    button: {
      width: 150,
      backgroundColor: "#03363D",
      marginVertical: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 10,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      width: 250,
      height: 90,
      display: "flex",
    },
    textInput: {
      minHeight: 40,
      fontSize: 22,
      margin: 0,
      borderBottomColor: "#F5F5F5",
      borderBottomWidth: 1,
    },
  });

  /**
   * Renders a separator component.
   *
   * @return {JSX.Element} A JSX element representing the separator.
   */
  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("./images/UP23.png")}
        style={styles.image}
      /> */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <Text style={styles.text2}>Email...</Text>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text2}>Password...</Text>
            <Input
              placeholder="Input your password"
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => setPassword(text)}
              value={password}
              rightIcon={
                <Button
                  icon={
                    secureTextEntry ? (
                      <Icon name="eye-off" type="feather" />
                    ) : (
                      <Icon name="eye" type="feather" />
                    )
                  }
                  type="clear"
                  onPress={toggleSecureEntry}
                />
              }
            />

            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              secureTextEntry={!isSelected}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Sign In Pressed")}
          >
            <Text style={styles.text4}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.inLine}>
            <Separator />
            <Text style={styles.text4}>or</Text>
            <Separator />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignUpForm")}
          >
            <Text style={styles.text4}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn2;
