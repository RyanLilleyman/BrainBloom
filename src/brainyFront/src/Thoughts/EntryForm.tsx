import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  StyleSheet,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

const EntryForm: React.FC = ({
  //need a props object to secify these props
  open,
  formOpacity,
  entries,
  setEntries,
  handleFabPress,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formWidth, setFormWidth] = useState(
    Dimensions.get("window").width * 0.9
  );

  useEffect(() => {
    const updateFormWidth = () => {
      const newWidth = Dimensions.get("window").width * 0.9;
      setFormWidth(newWidth);
    };

    const updateFormWidthDelayed = () => setTimeout(updateFormWidth, 100);

    const dimensionsListener = Dimensions.addEventListener(
      "change",
      updateFormWidthDelayed
    );

    return () => {
      clearTimeout(updateFormWidthDelayed());
      dimensionsListener.remove();
    };
  }, []);

  React.useEffect(() => {
    if (!open) {
      Keyboard.dismiss();
    }
  }, [open]);

  const onSave = () => {
    const date = new Date();
    setEntries([...entries, { title, description, date }]);
    setTitle("");
    setDescription("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.keyboardAvoidingView}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={[styles.formContainer, { width: formWidth }]}>
            <Animated.View style={{ opacity: formOpacity }}>
              <TextInput
                mode="outlined"
                label="Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
              />
              <TextInput
                mode="outlined"
                label="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                style={styles.input}
              />
              <View style={styles.buttonContainer}>
                <Button
                  mode="contained"
                  onPress={onSave}
                  style={styles.saveButton}
                  labelStyle={styles.buttonLabel}
                >
                  Save
                </Button>
                <Button
                  mode="contained"
                  onPress={handleFabPress}
                  style={styles.closeButton}
                  labelStyle={styles.buttonLabel}
                >
                  Close
                </Button>
              </View>
            </Animated.View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    marginBottom: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: "rgba(173, 227, 226, 1)",
    elevation: 0,
  },
  closeButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "rgba(173, 227, 226, 1)",
    elevation: 0,
  },
  buttonLabel: {
    fontWeight: "bold",
    color: "white",
  },
});

export default EntryForm;
