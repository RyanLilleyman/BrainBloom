import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions} from "react-native";

/**
 * Renders a component that displays an attention message.
 * 
 * @return {ReactElement} The rendered Attention component.
 */
const Attention: React.FC = () => {
  const { width, height } = Dimensions.get("window");
  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: width,
      height: height,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(173, 227, 226, 1)",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
    },
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.text}>Attention</Text>
      </View>
    </ScrollView>
  );
};



export default Attention;
