import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ViewStyle,
  Dimensions,
  Animated
} from 'react-native';

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
    height: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dee3d2',
  },
  imageBackground: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
})

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  //initialize fadeAnim as a 
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    // fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // hold for 1 second
      setTimeout(() => {
        // fade out
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace('SignIn2');
        });
      }, 2000); // delay for 1 second
    });
  }, [fadeAnim, navigation])

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ImageBackground source={require("./mainLoading/logo6.png")} style={styles.imageBackground} />
      </Animated.View>
    </View>
  );
}

export default LoadingScreen;
