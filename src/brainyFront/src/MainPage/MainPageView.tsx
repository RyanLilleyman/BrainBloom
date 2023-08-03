import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AVPlaybackSource, Audio } from "expo-av";
import Attention from "../Attention/AttentionView";
import Thoughts from "../Thoughts/Thoughts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MainView: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [soundIndex, setSoundIndex] = useState<number>(0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlay, setPlay] = useState<boolean>(false);

  const pathArray: AVPlaybackSource[] = [
    { uri: require("../Audio/aud1.mp3") },
    { uri: require("../Audio/aud2.mp3") },
    { uri: require("../Audio/aud3.mp3") },
    { uri: require("../Audio/aud4.mp3") },
  ];

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  useEffect(() => {
    if (soundIndex !== null) {
      loadSound(pathArray, soundIndex);
      setPlay(true);
    }
  }, [soundIndex]);

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

  const renderScene = () => {
    switch (index) {
      case 0:
        return <Thoughts />;
      case 1:
        return (
          <Attention
            isPlay={isPlay}
            soundIndex={soundIndex}
            setSoundIndex={setSoundIndex}
            stopSound={stopSound}
            repeatSound={repeatSound}
            handlePlayPress={handlePlayPress}
          />
        );
      default:
        return null;
    }
  };
  //extract sytles from the return
  return (
    <View style={{ flex: 1 }}>
      {renderScene()}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#034d59",
          height: 110,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: index === 0 ? "#027373" : "#034d59",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIndex(0)}
        >
          <MaterialCommunityIcons
            name={index === 0 ? "lightbulb-on" : "lightbulb-off"}
            size={24}
            color={index === 0 ? "#FFFFFF" : "#B0C4DE"}
          />
          <Text style={{ color: index === 0 ? "#FFFFFF" : "#B0C4DE" }}>
            Thoughts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: index === 1 ? "#027373" : "#034d59",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIndex(1)}
        >
          <MaterialCommunityIcons
            name={index === 1 ? "alert-circle-outline" : "alert-circle"}
            size={24}
            color={index === 1 ? "#FFFFFF" : "#B0C4DE"}
          />
          <Text style={{ color: index === 1 ? "#FFFFFF" : "#B0C4DE" }}>
            Attention
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainView;
