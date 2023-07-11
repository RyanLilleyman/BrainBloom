import { text } from 'express';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, ImageBackground, Dimensions} from 'react-native';

type Styles = {
    container: ViewStyle;
    image: ViewStyle;
    text: any;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height  
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
const SignUp = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./images/signUpMan.png')} style={styles.image}>
            <Text style = {styles.text}>SignUp</Text>
            </ImageBackground>
        </View>
    );
}

export default SignUp;