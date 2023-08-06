import React, { useState, useRef, useEffect } from "react";
import ThoughtsView from "./ThoughtsView";
import { Animated } from "react-native";
import { Entry } from "./EntryForm";

const Thoughts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const formOpacity: Animated.Value = useRef(new Animated.Value(0)).current;


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
