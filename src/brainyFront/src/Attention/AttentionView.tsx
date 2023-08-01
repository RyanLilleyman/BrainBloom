import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Audio } from "expo-av";
import { FAB } from "react-native-paper";

const Attention = ({ onReset }) => {
  const tracks = [
    { id: "1", title: "Track 1", url: require('../Audio/aud1.mp3') },
    { id: "2", title: "Track 2", url: require('../Audio/aud2.mp3') },
    { id: "3", title: "Track 3", url: require('../Audio/aud3.mp3') },
    { id: "4", title: "Track 4", url: require('../Audio/aud4.mp3') },
  ];

  const [currentTrack, setCurrentTrack] = useState(null);
  const [soundObject, setSoundObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    onReset(resetPlayer);
  }, [onReset]);

  const resetPlayer = async () => {
    console.log('resetPlayer called, isVisible:', isVisible);
    try {
      if (soundObject) {
        console.log('Stopping and unloading sound object');
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
        setSoundObject(null);
      }
      setIsPlaying(false);
      setCurrentTrack(null);
    } catch (error) {
      console.error("Error resetting player:", error.message);
    }
  };
  
  

  useEffect(() => {
    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  const playTrack = async (trackUrl) => {
    try {
      // If there is a current track playing, stop and unload it
      if (soundObject) {
        await soundObject.stopAsync();
        await soundObject.unloadAsync();
      }
  
      // Create a new Sound object
      const newSoundObject = new Audio.Sound();
      
      // Set up a listener to update the isPlaying state when playback status changes
      newSoundObject.setOnPlaybackStatusUpdate((status) => {
        setIsPlaying(status.isPlaying);
      });
  
      // Load the new track URL
      await newSoundObject.loadAsync(trackUrl);
  
      // Play the new track
      await newSoundObject.playAsync();
  
      // Update state with the new Sound object and track URL
      setSoundObject(newSoundObject);
      setCurrentTrack(trackUrl);
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
        await soundObject.unloadAsync();
        setIsPlaying(false);
        setCurrentTrack(null);
        setSoundObject(null);
      }
    } catch (error) {
      console.error("Error resetting track:", error.message);
    }
  };

  const resetEverything = async () => {
    try {
      if (soundObject) {
        await soundObject.unloadAsync();
        setIsPlaying(false);
        setCurrentTrack(null);
        setSoundObject(null);
      }
    } catch (error) {
      console.error("Error resetting everything:", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.container}>
      {tracks.map((track) => (
        <View key={track.id} style={styles.tab}>
          <Text
            onPress={() => playTrack(track.url)}
            style={[styles.tabText, isPlaying ? styles.disabledTabText : {}]}
          >
            {track.title}
          </Text>
        </View>
      ))}
      {currentTrack && (
        <View style={styles.controlsContainer}>
          <Text style={styles.currentTrackText}>{currentTrack}</Text>
          <View style={styles.buttonsContainer}>
            {isPlaying ? (
              <FAB icon="pause" onPress={pauseTrack} style={styles.pauseButton} color="black" />
            ) : (
              <FAB icon="play" onPress={() => playTrack(currentTrack)} style={styles.playButton} color="white" />
            )}
            <FAB icon="stop" onPress={resetTrack} style={styles.stopButton} color="white" />
            <FAB icon="refresh" onPress={resetEverything} style={styles.resetButton} color="white" />
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
  disabledTabText: {
    color: "#aaa",
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
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  playButton: {
    marginHorizontal: 20,
    backgroundColor: "green",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  pauseButton: {
    marginHorizontal: 20,
    backgroundColor: "yellow",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  stopButton: {
    marginHorizontal: 20,
    backgroundColor: "red",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  resetButton: {
    marginHorizontal: 20,
    backgroundColor: "blue",
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Attention;
