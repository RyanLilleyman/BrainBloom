import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from "react-native";

/**
 * Renders a component that displays an attention message.
 *
 * @return {ReactElement} The rendered Attention component.
 */
const Attention: React.FC = () => {
  const { width, height } = Dimensions.get("window");
 
  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: width,
      height: height,
      flex: 1,
      display: "flex",
      flexDirection:"column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(173, 227, 226, 1)",
    },
    trackContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 10,
    },
    trackBox: {
      flex:1
    },
    buttonsContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap:3
    },
    button: {
      borderColor: "black",
      borderWidth: 1,
      flex: 1,
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
    },
  });
  const trackContents: JSX.Element[] = [];
  for (let i = 0; i < 5; i++){
    trackContents.push(
      <TouchableOpacity key={i} style={styles.trackBox}>

        <Text style={styles.text}>Track {i + 1}</Text>
      </TouchableOpacity>
    );
  }
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < 4; i++){
    buttons.push(
      <TouchableOpacity key={i} style={styles.button}>
        <Text style={styles.text}>Button {i + 1}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.trackContainer}>
        {trackContents}
      </View>
      <View style={styles.buttonsContainer}>
        {buttons}
      </View>
    </View>
  );
};

export default Attention;
