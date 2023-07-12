import React, {useEffect} from "react";
import {View, StyleSheet, ImageBackground, ViewStyle, Dimensions, ActivityIndicator} from "react-native";


type Styles = {
  container: ViewStyle,
  imageBackground: ViewStyle
}

type LoadingScreenProps = {
  navigation: any;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ede8de",
  },
  imageBackground: {
    width: 400, 
    height: 400, 
    resizeMode: "cover",
    justifyContent: "center"
  }
})




const LoadingScreen: React.FC<LoadingScreenProps> = ({navigation}) => {
  useEffect (() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, [navigation])
  

  return(
  <View style={styles.container}>
    <ImageBackground source={require("./mainLoading/stringLoad.png")} style={styles.imageBackground}/>
  </View>
  );
}

export default LoadingScreen;


