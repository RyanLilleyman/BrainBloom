import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Attention from "../attention/attention.view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Thoughts from "../thoughts/Thoughts";

const MainView: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const renderScene = () => {
    switch (index) {
      case 0:
        return <Thoughts />;
      case 1:
        return <Attention />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScene()}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#034d59",
          height: 110,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: index === 0 ? "#027373" : "#034d59",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIndex(0)}
        >
          <MaterialCommunityIcons
            name={index === 0 ? "lightbulb-on" : "lightbulb-off"}
            size={24}
            color={index === 0 ? "#FFFFFF" : "#B0C4DE"}
          />
          <Text style={{ color: index === 0 ? "#FFFFFF" : "#B0C4DE" }}>
            Thoughts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: index === 1 ? "#027373" : "#034d59",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setIndex(1)}
        >
          <MaterialCommunityIcons
            name={index === 1 ? "alert-circle-outline" : "alert-circle"}
            size={24}
            color={index === 1 ? "#FFFFFF" : "#B0C4DE"}
          />
          <Text style={{ color: index === 1 ? "#FFFFFF" : "#B0C4DE" }}>
            Attention
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainView;
