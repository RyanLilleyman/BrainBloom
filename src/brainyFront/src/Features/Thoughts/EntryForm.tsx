import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { ThoughtValidationSchema } from "./ThoughtValidation";
import  ThoughtModel  from "../../Services/ThoughtsService/ThoughtModel";
import { ThoughtDto } from "../../Services/ThoughtsService/ThoughtDto";
import { ThoughtsStatus } from "../../Services/ThoughtsService/ThoughtDto";
import { useFormik } from "formik";
import RNPickerSelect from "react-native-picker-select";

export type Entry = {
  id: string;
  title: string;
  content: string;
  date: string;
  status: ThoughtsStatus;
};
interface EntryFormProps {
  // open: boolean;
  formOpacity: Animated.Value;
  entries: Array<Entry>;
  setEntries: Function;
  handleFabPress: Function;
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
  // open,
  formOpacity,
  entries,
  setEntries,
  handleFabPress,
}) => {
  const [formWidth, setFormWidth] = useState(
    Dimensions.get("window").width * 0.9
  );

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      date: new Date(),
      status: ThoughtsStatus.NEUTRAL,
    },
    validationSchema: ThoughtValidationSchema,
    onSubmit: (values: ThoughtDto) => {
      ThoughtModel.createThought(values)
        .then((response) => {
          console.log(response.data);
          formik.resetForm();
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
        })
        .catch((error) => {
          console.log(error);
          // Handle the failed form submission.
        });
    },
  });

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

  // React.useEffect(() => {
  //   if (!open) {
  //     Keyboard.dismiss();
  //   }
  // }, [open]);
  //need to implement response error below buttons
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <View style={styles.container}>
        <View style={[styles.formContainer, { width: formWidth }]}>
          <Animated.View style={{ opacity: formOpacity }}>
            <TextInput
              mode="outlined"
              label="Title"
              value={formik.values.title}
              onChangeText={(text) => {
                formik.setFieldValue("title", text);
              }}
              style={[styles.input, styles.fontSize]}
            />
            {formik.errors.title && (
              <Text style={styles.checkText}>{formik.errors.title}</Text>
            )}
            <TextInput
              mode="outlined"
              label="Description"
              value={formik.values.content}
              onChangeText={(text) => {
                formik.setFieldValue("content", text);
              }}
              multiline
              style={styles.input}
            />
            {formik.errors.content && (
              <Text style={styles.checkText}>{formik.errors.content}</Text>
            )}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingVertical: 5,
              }}
            >
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
                  inputIOS: {
                    color: "black",
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                    borderWidth: 0.5,
                    borderColor: "gray",
                    borderRadius: 4,
                    backgroundColor: "white",
                  },
                  inputAndroid: {
                    color: "black",
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                    borderWidth: 0.5,
                    borderColor: "gray",
                    borderRadius: 4,
                    backgroundColor: "white",
                  },
                  inputWeb: {
                    color: "black",
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                    borderWidth: 0.5,
                    borderColor: "gray",
                    borderRadius: 4,
                    backgroundColor: "white",
                  },
                }}
              />
              {formik.touched.status && formik.errors.status && (
                <Text style={styles.checkText}>{formik.errors.status}</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={() => {
                  formik.handleSubmit();
                }}
                style={styles.saveButton}
                labelStyle={styles.buttonLabel}
              >
                Save
              </Button>
              <Button
                mode="contained"
                onPress={() => {
                  handleFabPress();
                }}
                style={styles.closeButton}
                labelStyle={styles.buttonLabel}
              >
                Close
              </Button>
            </View>
          </Animated.View>
        </View>
      </View>
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
  checkText: TextStyle;
  fontSize: TextStyle;
};
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
    maxWidth: 400,
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
  checkText: {
    alignSelf: "center",
    color: "#000000",
    fontSize: 12,
    marginBottom: 5,
  },
  fontSize: {
    fontSize: 18,
    textAlign: "auto",
    color: "#000000",
  },
});

export default EntryForm;
