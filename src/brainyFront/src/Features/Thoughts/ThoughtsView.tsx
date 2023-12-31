import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";
import { FAB, Searchbar } from "react-native-paper";
import EntryListView from "./EntryListView";
import EntryForm from "./EntryForm";
import ThoughtModel from "../../Services/ThoughtsService/ThoughtModel";
import { Entry } from "./EntryForm";
/**
 * Handles the press event of the FAB (Floating Action Button).
 *
 * @return {void}
 */
const ThoughtsView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const formOpacity = useState(new Animated.Value(0))[0];

  /**
   * Handles the press event of the FAB (Floating Action Button).
   *
   * @return {void}
   */
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
          <Animated.View
            style={[styles.entryFormContainer, { opacity: formOpacity }]}
          >
            <EntryForm
              formOpacity={formOpacity}
              entries={entries}
              setEntries={setEntries}
              handleFabPress={handleFabPress}
            />
          </Animated.View>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleFabPress}
          style={styles.fabContainer}
        >
          <FAB
            icon={open ? "close" : "plus"}
            onPress={handleFabPress}
            style={styles.fab}
            color="black"
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
    backgroundColor: "#F5F5F5",
    elevation: 4,
    shadowColor: "#000", // Adding shadows for a more elevated look
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    backgroundColor: "white",
    borderRadius: 28,
    overflow: "hidden",
    shadowColor: "#000", // Adding shadows for a more elevated look
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fab: {
    backgroundColor: "#F5F5F5",
  },
  entryFormContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThoughtsView;
