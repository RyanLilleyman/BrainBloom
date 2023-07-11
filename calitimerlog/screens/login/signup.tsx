import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, ImageBackground, Dimensions} from 'react-native';

type Styles = {
    container: ViewStyle;
    image: ViewStyle;
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
    }
})
const SignUp = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/')} style={styles.image}>
            <Text>SignUp</Text>
            </ImageBackground>
        </View>
    );
}

export default SignUp;