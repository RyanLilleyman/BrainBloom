import { text } from 'express';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,
     ViewStyle, ImageBackground, Dimensions} from 'react-native';

type Styles = {
    container: ViewStyle;
    image: ViewStyle;
    triangle: ViewStyle;
    box: ViewStyle;
    text: any;
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
    },
    image: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height  
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 100,
    },
    triangle: {
        margin:0,
        position: 'absolute',
        width:0,
        height:0,
        borderBottomWidth: 300,
        borderRightWidth: 300,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    box: {
        width:100,
        height:100,
        marginTop:100,
        borderRadius:5,
        backgroundColor:'white',
    }
}) 

const SignUp = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/signUpMan.png')} style={styles.image}>
          <Text style={styles.text}>SignUp</Text>
          <View style={styles.container2}>
            <View style={styles.box}></View>
            <View style={[styles.triangle, {zIndex: 1}]}></View>
          </View>
        </ImageBackground>
      </View>
    );
  }

export default SignUp;