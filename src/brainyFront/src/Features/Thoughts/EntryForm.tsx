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
  ViewStyle,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

interface EntryFormProps {
  open: boolean;
  formOpacity: Animated.Value;
  entries: any;
  setEntries: any;
  handleFabPress: any;
}

/**
 * Renders the entry form component.
 *
 * @param {EntryFormProps} props - The component props.
 * @param {boolean} props.open - Indicates if the entry form is open.
 * @param {number} props.formOpacity - The opacity of the form.
 * @param {Array<Entry>} props.entries - The list of entries.
 * @param {Function} props.setEntries - The function to set the list of entries.
 * @param {Function} props.handleFabPress - The function to handle the press event on the FAB button.
 * @return {ReactElement} The rendered entry form component.
 */
const EntryForm: React.FC<EntryFormProps> = ({
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
    /**
     * Updates the width of the form.
     *
     * @return {void} No return value.
     */
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

  /**
   * Saves the current entries by adding a new entry with the given title,
   * description, and current date to the list of entries. It then clears
   * the title and description fields.
   *
   * @return {void}
   */
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

type Styles = {
  keyboardAvoidingView: ViewStyle;
  container: ViewStyle;
  formContainer: ViewStyle;
  input: ViewStyle;
  buttonContainer: ViewStyle;
  saveButton: ViewStyle;
  closeButton: ViewStyle;
  buttonLabel: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 20,
    marginBottom: 50,
    borderColor: "black",
    borderWidth: 0.5,
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
    backgroundColor: "#00c1bd",
    elevation: 1,
  },
  closeButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: "#00c1bd",
    elevation: 1,
  },
  buttonLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#F5F5F5",
  },
});

export default EntryForm;
