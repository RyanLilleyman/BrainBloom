import React from "react";
import {View, StyleSheet, ImageBackground, ViewStyle, Dimensions} from "react-native";

type Styles = {
  container: ViewStyle,
  imageBackground: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e4dfcd",
  },
  imageBackground: {
    width: 200, 
    height: 200, 
    resizeMode: "cover",
    justifyContent: "center"
  }
})

const App = () => {
  return(
  <View style={styles.container}>
    <ImageBackground source={require("./assets/mainLoading/maybelogooo.png")} style={styles.imageBackground}/>
  </View>
  );
}

export default App;


