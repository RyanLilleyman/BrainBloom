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

interface AttentionProps {
  isPlay: boolean;
  soundIndex: number;
  setSoundIndex: (index: number) => void;
  stopSound: () => void;
  repeatSound: () => void;
  handlePlayPress: () => void;
}

/**
 * Generates the Attention component.
 *
 * @param {boolean} isPlay - indicates if the sound is currently playing
 * @param {number} soundIndex - the index of the selected sound
 * @param {function} setSoundIndex - sets the index of the selected sound
 * @param {function} stopSound - stops the sound playback
 * @param {function} repeatSound - repeats the sound playback
 * @param {function} handlePlayPress - handles the play button press
 * @return {JSX.Element} the Attention component
 */
const Attention: React.FC<AttentionProps> = ({
  isPlay,
  soundIndex,
  setSoundIndex,
  stopSound,
  repeatSound,
  handlePlayPress,
}) => {
  const [width, setWidth] = useState<number>(Dimensions.get("window").width);

  const height: number = Dimensions.get("window").height;

  useEffect(() => {
    /**
     * Updates the width of the form.
     *
     * @return {void}
     */
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
      backgroundColor: "#F5F5F5",
      display: "flex",
      justifyContent: "center",
      borderColor: "black",
      width: "90%",
      maxWidth: 400,
      borderWidth: 1,
      flexGrow: 1,
      textAlign: "center",
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 4,
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
      backgroundColor: "#007B83",
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
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 4,
    },
    text: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
  });
  const trackContents: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    trackContents.push(
      <TouchableOpacity
        key={i}
        onPress={() => {
          setSoundIndex(i);
        }}
        style={styles.trackBox}
      >
        <Text style={styles.text}>ATT {i + 1}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.trackContainer}>{trackContents}</View>
      <Text style={styles.text}>ATT {soundIndex + 1} selected!</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          key={10}
          style={styles.button}
          onPress={handlePlayPress}
        >
          <MaterialCommunityIcons
            name={isPlay ? "play" : "pause"}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
        <TouchableOpacity key={11} style={styles.button} onPress={repeatSound}>
          <MaterialCommunityIcons name={"repeat"} size={30} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity key={12} style={styles.button} onPress={stopSound}>
          <MaterialCommunityIcons name={"stop"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Attention;
