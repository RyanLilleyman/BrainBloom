import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ViewStyle,
  Dimensions,
  Animated
} from 'react-native';

export type Styles = {
  container: ViewStyle,
  imageBackground: ViewStyle
}

export type LoadingScreenProps = {
  navigation: any;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(173, 227, 226, 1)',
  },
  imageBackground: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
})

const LoadingScreen: React.FC<LoadingScreenProps> = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace('SignIn1');
        });
      }, 2000); 
    });
  }, [fadeAnim, navigation])

  return (
    <View style={styles.container} testID="loading-screen">
      <Animated.View style={{ opacity: fadeAnim }} testID="animated-view">
        <ImageBackground source={require("./images/logo6.png")} style={styles.imageBackground} testID="image-background" />
      </Animated.View>
    </View>
  );
}

export default LoadingScreen;
