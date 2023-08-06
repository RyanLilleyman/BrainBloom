import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ThoughtsStatus } from "../../Services/ThoughtsService/ThoughtDto";
import ThoughtModel from "../../Services/ThoughtsService/ThoughtModel";
import { Entry } from "./EntryForm";
import RNPickerSelect from "react-native-picker-select";
import Separator from "../../Components/Separator";
import { Colors, Sizes } from "../../Components/Separator";

interface EntryListViewProps {
  entries: Entry[];
  searchQuery: string;
  setEntries: (entries: object[]) => void;
}

const EntryListView: React.FC<EntryListViewProps> = ({
  entries,
  searchQuery,
  setEntries,
}) => {
  //implement useEffect to wait for the changes wthin the entries and queries and
  //fetch all entries from the database each time. actally that would be a waste of time

  useEffect(() => {
    ThoughtModel.getThoughts().then((thoughts) => {
      const data = thoughts.data.map((entry: Entry) => {
        return {
          id: entry.id,
          title: entry.title,
          content: entry.content,
          date: entry.date,
          status: entry.status,
        };
      });
      // setEntries(thoughts.data);
      console.log(thoughts.data);
      console.log(data);
      setEntries(data);
    });
  }, []);
  const onDelete = (index: number) => {
    console.log(index);
    console.log(entries[index].id);
    ThoughtModel.deleteThought(entries[index].id).then((response) => {
      console.log(response.data);
    });
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
            <Text style={styles.separator}></Text>
            <Text style={styles.date}>Date: {entry.date.toLocaleString()}</Text>
            <Text style={styles.separator}></Text>
            <Text style={styles.description}>{entry.content}</Text>
            <Text style={styles.separator}></Text>
            <View style={styles.statusContainer}>
              <RNPickerSelect
                onBlur={() => formik.setFieldTouched("status")}
                placeholder={{ label: "Thought Pattern...", value: "" }}
                onValueChange={(value) => formik.setFieldValue("status", value)}
                items={[
                  { label: "Worrying", value: ThoughtsStatus.WORRY },
                  { label: "Ruminating", value: ThoughtsStatus.RUMINATE },
                  { label: "Neutral", value: ThoughtsStatus.NEUTRAL },
                ]}
                style={{
                  inputIOS: styles.pickerStyle,
                  inputAndroid: styles.pickerStyle,
                  inputWeb: styles.pickerStyle,
                }}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => onDelete(index)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "rgba(173, 227, 226, 1)",
  },
  entry: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%",
    borderWidth: 1,
    borderColor: "#F5F5F5",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
    paddingLeft: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  title: {
    fontWeight: "bold",
    flex: 1,
  },
  date: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#555",
    marginBottom: 5,
  },
  description: {
    fontStyle: "italic",
  },
});

export default EntryListView;
