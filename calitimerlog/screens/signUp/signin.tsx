import { text } from 'express';
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ViewStyle as RNViewStyle,
  ImageBackground, useWindowDimensions
} from 'react-native';
     

interface ViewStyle extends RNViewStyle{
  width?: number | string;
  height?: number | string;
}

const SignIn = () => {
    type Styles = {
        container: ViewStyle;
        separator: ViewStyle;
        image: ViewStyle;
        box: ViewStyle;
        text: any;
    }


    const window = useWindowDimensions();

    const styles = StyleSheet.create({
        image: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'cover',
          width: window.width,
          height: window.height,
        },
        box: {
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          
          width:'98%',
          height:'70%',
          backgroundColor: '#8F7B6A',
          borderRadius: 10,
          opacity: 0.5
        },
        separator: {
          marginVertical: 8,
          borderBottomColor: '#737373',
          borderBottomWidth: StyleSheet.hairlineWidth,
      },
      text: {
        fontSize: 22,
        textAlign:'center',
        opacity: 1
      }
    }) 

    const Separator = () => (
      <View style={styles.separator} />
    )





    return (
        <ImageBackground source={require('./images/rocky.png')} style={styles.image}>
            <View style={styles.box}>
              <Text style={styles.text}>Loading</Text>
              <Separator/>
              <Text style={styles.text}>Loading</Text>
            </View>
        </ImageBackground>
    );
}

export default SignIn;
