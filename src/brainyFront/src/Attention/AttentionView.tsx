import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ViewStyle,
  TextStyle,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  EmitterSubscription,
} from "react-native";

/**
 * Renders a component that displays an attention message.
 *
 * @return {ReactElement} The rendered Attention component.
 */
const Attention: React.FC = () => {
  const [width, setWidth] = useState<number>(Dimensions.get("window").width);
  const height: number = Dimensions.get("window").height;
  const [index, setIndex] = useState<boolean>(true);

  useEffect(() => {
    const updateFormWidth: () => void = () => {
      const newWidth: number = Dimensions.get("window").width;
      setWidth(newWidth);
    };

    const updateFormWidthDelayed = () => setTimeout(updateFormWidth, 100);

    const dimensionsListener: EmitterSubscription = Dimensions.addEventListener(
      "change",
      updateFormWidthDelayed
    );

    return () => {
      clearTimeout(updateFormWidthDelayed());
      dimensionsListener.remove();
    };
  }, []);

  type Styles = {
    container: ViewStyle;
    trackContainer: ViewStyle;
    trackBox: ViewStyle;
    buttonsContainer: ViewStyle;
    button: ViewStyle;
    text: TextStyle;
  };
  const styles = StyleSheet.create<Styles>({
    container: {
      width: width,
      height: height,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(173, 227, 226, 1)",
    },
    trackContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      gap: 10,
      flex: 4,
    },
    trackBox: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      borderColor: "black",
      width: "90%",
      maxWidth: 400,
      borderWidth: 1,
      flexGrow: 1,
      textAlign: "center",
      borderRadius: 5,
    },
    buttonsContainer: {
      width: "90%",
      maxWidth: 400,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 10,
      flex: 1,
      gap: 10,
      padding: 20,
    },
    button: {
      backgroundColor: "#00c1bd",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      height: "50%",
      width: "33%",
      borderColor: "black",
      borderWidth: 1,
      flex: 1,
      padding: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
  });
  const trackContents: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    trackContents.push(
      <TouchableOpacity key={i} style={styles.trackBox}>
        <Text style={styles.text}>Track {i + 1}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.trackContainer}>{trackContents}</View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          key={1}
          style={styles.button}
          onPress={() => {
            setIndex(!index);
          }}
        >
          <MaterialCommunityIcons
            name={index ? "play" : "pause"}
            size={30}
            color={index ? "white" : "#B0C4DE"}
          />
        </TouchableOpacity>
        <TouchableOpacity key={1} style={styles.button}>
          <MaterialCommunityIcons name={"repeat"} size={30} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity key={2} style={styles.button}>
          <MaterialCommunityIcons name={"stop"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Attention;
