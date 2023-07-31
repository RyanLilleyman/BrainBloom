import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import Thoughts from "../thoughts/thoughts.view";
import Attention from "../attention/attention.view";

const routes = [
  {
    key: "thoughts",
    title: "Thoughts",
    unfocusedIcon: "lightbulb-off",
    focusedIcon: "lightbulb",
    icon: "lightbulb",
  },
  {
    key: "attention",
    title: "Attention",
    unfocusedIcon: "alert-circle",
    focusedIcon: "alert-circle-outline",
  },
];

const renderScene = BottomNavigation.SceneMap({
  thoughts: Thoughts,
  attention: Attention,
});

/**
 * Renders the main view component.
 *
 * @return {React.FC} The main view component.
 */
const MainView: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      barStyle={{ backgroundColor: "rgba(113,167,166,1)", paddingTop:10, height:110 }}
      inactiveColor="rgba(2, 60, 73, 1)"
      shifting={true}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainView;
