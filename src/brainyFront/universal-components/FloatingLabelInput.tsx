import { useState, useRef, useEffect } from "react";
import { View, TextInput, Animated } from "react-native";
import { Feather } from "@expo/vector-icons";

const FloatingLabelInput = ({
  label,
  secureTextEntry,
  setSecureTextEntry,
  isPassword,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(
    new Animated.Value(props.value === "" ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || props.value !== "" ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, props.value]);

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#fff"],
    }),
  };

  return (
    <View
      style={{
        paddingTop: 18,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        {...props}
        style={{
          height: 40,
          fontSize: 20,
          color: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#fff",
          flex: 1,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
        blurOnSubmit
      />
      {isPassword &&
        (secureTextEntry ? (
          <Feather
            name="eye-off"
            size={27}
            color="#fff"
            onPress={() => setSecureTextEntry(false)}
          />
        ) : (
          <Feather
            name="eye"
            size={27}
            color="#fff"
            onPress={() => setSecureTextEntry(true)}
          />
        ))}
    </View>
  );
};

export default FloatingLabelInput;
