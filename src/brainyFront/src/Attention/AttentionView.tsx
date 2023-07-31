import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Audio } from "expo-av";
import { FAB } from "react-native-paper";

const tracks = [
  { id: "1", title: "Track 1", url: "URL_TO_TRACK_1" },
  { id: "2", title: "Track 2", url: "URL_TO_TRACK_2" },
  { id: "3", title: "Track 3", url: "URL_TO_TRACK_3" },
  { id: "4", title: "Track 4", url: "URL_TO_TRACK_4" },
];

const Attention: React.FC = () => {
  const { width, height } = Dimensions.get("window");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [soundObject, setSoundObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      // Clean up resources when the component unmounts
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  const playTrack = async (trackUrl) => {
    try {
      // Stop the currently playing track, if any
      if (soundObject) {
        await soundObject.stopAsync();
      }

      // Load and play the selected track
      const newSoundObject = new Audio.Sound();
      await newSoundObject.loadAsync({ uri: trackUrl });
      await newSoundObject.playAsync();
      setSoundObject(newSoundObject);
      setCurrentTrack(trackUrl);
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing track:", error.message);
    }
  };

  const pauseTrack = async () => {
    try {
      if (soundObject) {
        await soundObject.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Error pausing track:", error.message);
    }
  };

  const resetTrack = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
        setIsPlaying(false);
        setCurrentTrack(null);
        setSoundObject(null);
      }
    } catch (error) {
      console.error("Error resetting track:", error.message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.container}
    >
      {tracks.map((track) => (
        <View key={track.id} style={styles.tab}>
          <Text onPress={() => playTrack(track.url)} style={styles.tabText}>
            {track.title}
          </Text>
        </View>
      ))}
      {currentTrack && (
        <View style={styles.controlsContainer}>
          <Text style={styles.currentTrackText}>{currentTrack}</Text>
          <View style={styles.buttonsContainer}>
            {isPlaying ? (
              <FAB
                icon="pause"
                onPress={pauseTrack}
                style={styles.pauseButton}
                color="white"
              />
            ) : (
              <FAB
                icon="play"
                onPress={() => playTrack(currentTrack)}
                style={styles.playButton}
                color="white"
              />
            )}
            <FAB
              icon="stop"
              onPress={resetTrack}
              style={styles.stopButton}
              color="white"
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  tab: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  controlsContainer: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  currentTrackText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  playButton: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  pauseButton: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  stopButton: {
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
});

export default Attention;
