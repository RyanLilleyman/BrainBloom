import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

const EntryListView = ({ entries, searchQuery, setEntries }) => {
  const onDelete = (index) => {
    setEntries(entries.filter((_, idx) => idx !== index));
  };
  const filteredEntries = entries.filter((entry) => {
    return entry.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >
      {filteredEntries.length === 0 ? (
        <Text>No matching entries found.</Text>
      ) : (
        filteredEntries.map((entry, index) => (
          <View key={index} style={styles.entry}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{entry.title}</Text>
            </View>
            <Text style={styles.date}>{entry.date.toLocaleString()}</Text>
            <Text style={styles.description}>{entry.description}</Text>
            <Button title="Delete" onPress={() => onDelete(index)} />
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  entry: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    flex: 1,
  },
  date: {
    fontStyle: "italic",
    color: "grey",
    marginBottom: 5,
  },
  description: {
    fontStyle: "italic",
  },
});

export default EntryListView;
