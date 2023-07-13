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
  ScrollView
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
    }


    const window = useWindowDimensions();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#ede8de',

      },
      box: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        width:'98%',
        height:'65%',
        backgroundColor: 'rgba(143, 123, 106, 0.5)', // 'rgba' value equivalent to #8F7B6A at 50% opacity
        borderRadius: 10,
      },
      separator: {
        height: 1,
        width: '45%',
        marginVertical: 8,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      text: {
        color: 'white',
        fontSize: 22,
        textAlign:'center',
        opacity:1
      },
      button: {
        backgroundColor: 'black',
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
        <View style = {styles.image}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.box}>
              <TouchableOpacity
               style={styles.button}
               onPress={() => console.log('Sign In Pressed')}>
              <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.inLine}>
                <Separator/>
                <Text style={styles.text}>Or</Text>
                <Separator/>
              </View>
              <TouchableOpacity
               style={styles.button}
               onPress={() => console.log('Sign Up Pressed')}>
              <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        </View>

  );
  
}

export default SignIn;
