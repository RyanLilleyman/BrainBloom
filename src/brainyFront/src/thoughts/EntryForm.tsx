import React, { useRef } from "react";
import {
  View,
  Button,
  Animated,
  StyleSheet,
  TextInput as NativeTextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";

const EntryForm = ({
  open,
  formOpacity,
  entries,
  setEntries,
  handleFabPress,
}) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const descriptionInputRef = useRef();

  React.useEffect(() => {
    if (!open) {
      Keyboard.dismiss();
    }
  }, [open]);

  const onSave = () => {
    // Create a date object with the current date and time
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
      <Animated.View style={[styles.formContainer, { opacity: formOpacity }]}>
        <NativeTextInput
          style={styles.hiddenInput}
          onFocus={() => Keyboard.dismiss()} // Prevent the keyboard from opening when clicking outside
        />
        <TextInput
          mode="outlined"
          label="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          ref={descriptionInputRef}
          mode="outlined"
          label="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <View style={styles.buttonContainer}>
          <Button title="Save" onPress={onSave} />
          <Button title="Close" onPress={handleFabPress} />
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    width: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hiddenInput: {
    height: 0,
    opacity: 0,
  },
});

export default EntryForm;
