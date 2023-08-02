import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

/**
 * Renders a component that displays an attention message.
 *
 * @return {ReactElement} The rendered Attention component.
 */
const Attention: React.FC = () => {
  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      flex: 1,
      gap: 10,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(173, 227, 226, 1)",
    },
    trackContainer: {
      width: "100%",
      borderColor: "black",
      borderWidth: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      gap: 10,
      flex: 3,
    },
    trackBox: {
      display: "flex",
      justifyContent: "center",
      borderColor: "black",
      width: "90%",
      borderWidth: 1,
      flexGrow:1,
      textAlign: "center",
      
    },
    buttonsContainer: {
      borderColor: "black",
      borderWidth: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      flex:1,
      gap: 3,
    },
    button: {
      borderColor: "black",
      borderWidth: 1,
      flex: 1,
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
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    buttons.push(
      <TouchableOpacity key={i} style={styles.button}>
        <Text style={styles.text}>Button {i + 1}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.trackContainer}>{trackContents}</View>
      <View style={styles.buttonsContainer}>{buttons}</View>
    </SafeAreaView>
  );
};

export default Attention;
