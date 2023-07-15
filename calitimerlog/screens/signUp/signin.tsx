import { text } from 'express';
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  ViewStyle as RNViewStyle,
  ImageBackground,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image

} from 'react-native';
     

interface ViewStyle extends RNViewStyle{
  width?: number | string;
  height?: number | string;
}

/**
 * Renders the sign-in screen with an image background and loading text.
 *
 * @return {JSX.Element} The sign-in screen component.
 */
const SignIn = () => {
    type Styles = {
        container: ViewStyle;
        separator: ViewStyle;
        image: ViewStyle;
        box: ViewStyle;
        button: any;
        text: any;
        textInput: any;
    }


    const window = useWindowDimensions();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#B2D8D8',
      },
      image: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        resizeMode: 'cover',
        width:'98%',
        height:'80%',
        borderRadius: 10,
        overflow: 'hidden',
      },
      separator: {
        height: 1,
        width: '40%',
        marginVertical: 8,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      text: {
        
        color: '#FDFEFE',
        fontSize: 22,
        textAlign:'center',
        opacity:1,
        marginHorizontal:10,
      },
      button: {
        width: 200,
        backgroundColor: '#367872',
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
      },
      scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput:{
        width: '70%',
        height: 40,
        marginHorizontal: 10,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }
  });
  
    /**
     * Renders a separator component.
     *
     * @return {JSX.Element} A JSX element representing the separator.
     */
    const Separator = () => (
      <View style={styles.separator} />
    )

    return (
        
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.box}>
            <ImageBackground source={require('./images/UP1.png')} style={styles.image}>
              
              <TextInput style={styles.textInput} 
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              />
              <TextInput style={styles.textInput} placeholder='Password'
              placeholderTextColor="white"
              secureTextEntry
              />

              <TouchableOpacity
               style={styles.button}
               onPress={() => console.log('Sign In Pressed')}>
              <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.inLine}>
                <Separator/>
                <Text style={styles.text}>or</Text>
                <Separator/>
              </View>
              <TouchableOpacity
               style={styles.button}
               onPress={() => console.log('Sign Up Pressed')}>
              <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </ImageBackground>
            </View>
          </ScrollView>
        </View>
        

  );
  
}

export default SignIn;
