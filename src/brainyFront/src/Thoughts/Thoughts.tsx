import React, { useState, useRef } from "react";
import ThoughtsView from "./ThoughtsView";
import { Animated } from "react-native";

const Thoughts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const formOpacity = useRef(new Animated.Value(0)).current;

  const handleFabPress = () => {
    setOpen(!open);
    Animated.timing(formOpacity, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ThoughtsView
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      entries={entries}
      setEntries={setEntries}
      open={open}
      setOpen={setOpen}
      formOpacity={formOpacity}
      handleFabPress={handleFabPress}
    />
  );
};

export default Thoughts;
