import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Audio, AVPlaybackSource } from "expo-av";
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
  active: number;
}
const Attention: React.FC<AttentionProps> = ({ active }) => {
  const [width, setWidth] = useState<number>(Dimensions.get("window").width);
  const [index, setIndex] = useState<number>(0);
  const [isPlay, setPlay] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const height: number = Dimensions.get("window").height;

  const pathArray: AVPlaybackSource[] = [
    { uri: require("../Audio/aud1.mp3") },
    { uri: require("../Audio/aud2.mp3") },
    { uri: require("../Audio/aud3.mp3") },
    { uri: require("../Audio/aud4.mp3") },
  ];

  

  useEffect(() => {
    if (index !== null) {
      loadSound(pathArray, index);
      setPlay(true);
    }
  }, [index]);

  const loadSound = async (pathArray: AVPlaybackSource[], index: number) => {
    console.log("loading sound");
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: audioSound } = await Audio.Sound.createAsync(
      pathArray[index]
    );
    setSound(audioSound);
  };

  const playSound = async () => {
    console.log("playing sound");
    await sound?.playAsync();
  };

  const pauseSound = async () => {
    console.log("pausing sound");
    await sound?.pauseAsync();
  };

  const stopSound = async () => {
    console.log("stopping sound");
    await sound?.stopAsync();
    setPlay(true);
  };

  const repeatSound = async () => {
    if (!isPlay) {
      console.log("repeating sound");
      await sound?.stopAsync();
      await playSound();
    }
  };

  const handlePlayPress = () => {
    setPlay(!isPlay);
    if (isPlay) {
      playSound();
    } else {
      pauseSound();
    }
  };

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
      <TouchableOpacity
        key={i}
        onPress={() => {
          setIndex(i);
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
      <Text style={styles.text}>ATT {index + 1} selected!</Text>
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
