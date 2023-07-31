import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FAB, Searchbar, useTheme } from "react-native-paper";
import EntryListView from "./EntryListView";
import EntryForm from "./EntryForm";

const ThoughtsView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const formOpacity = useState(new Animated.Value(0))[0];
  const theme = useTheme(); 

  const handleFabPress = () => {
    setOpen(!open);
    Animated.timing(formOpacity, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
            style={styles.searchBar}
            onFocus={() => setOpen(false)}
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView}
        >
          <EntryListView
            entries={entries}
            searchQuery={searchQuery}
            setEntries={setEntries}
          />
        </ScrollView>
        {open && (
          <EntryForm
            formOpacity={formOpacity}
            entries={entries}
            setEntries={setEntries}
            handleFabPress={handleFabPress}
          />
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleFabPress}
          style={styles.fabContainer}
        >
          <FAB
            icon={open ? "close" : "plus"}
            onPress={handleFabPress}
            style={[styles.fab, { backgroundColor: "white" }]} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  container: {
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: "rgba(173, 227, 226, 1)",
    padding: 10,
  },
  searchBar: {
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 4,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 16,
    borderRadius: 28, 
    overflow: "hidden",
  },
  fab: {

  },
});

export default ThoughtsView;
