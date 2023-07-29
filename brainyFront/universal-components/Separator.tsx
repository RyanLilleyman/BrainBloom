import React from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

export enum Colors {
  White = "#FFFFFF",
  Black = "#000000",
  DarkGray = "#A9A9A9",
}

export enum Sizes {
  Small = 14,
  Medium = 16,
  Large = 18,
}

interface Props {
  label: string;
  color: Colors;
  fontSize: Sizes;
}

type Styles = {
  InLine: ViewStyle;
  Line: ViewStyle;
  Label: TextStyle;
};

const Separator: React.FC<Props> = ({ label, color, fontSize }) => {
  const styles = StyleSheet.create<Styles>({
    InLine: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    Line: {
      width: "15%",
      height: 1,
      backgroundColor: color,
      marginHorizontal: 10,
    },
    Label: {
      textAlign: "center",
      fontSize: fontSize,
      color: color,
    },
  });

  return (
    <View style={styles.InLine}>
      <View style={styles.Line} />
      <Text style={styles.Label}>{label}</Text>
      <View style={styles.Line} />
    </View>
  );
};

export default Separator;
