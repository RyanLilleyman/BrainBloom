import React, { useState } from 'react';
import CheckBox from '../../universal-components/checkBox';
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
const SignIn2 = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
    type Styles = {
        container: ViewStyle;
        separator: ViewStyle;
        image: ViewStyle;
        box: ViewStyle;
        button: any;
        text: any;
        textInput: any;
    }
    const handleCheck = () =>{
      setSelection(!isSelected);
    }

    const window = useWindowDimensions();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#dee3d2',
      },
      image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'rgba(222, 227, 210, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '98%',
        
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
      text2: {
        color: '#FDFEFE',
        fontSize: 22,
        opacity:1,
        marginTop: 40
      },
      text3: {
        color: '#FDFEFE',
        marginRight:100,
      },
      button: {
        width: 150,
        backgroundColor: '#367872',
        marginVertical: 20,
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
      inputContainer :{
        width: 250,
        height: 100,
        display: 'flex',
      },
      textInput:{
        flex: 1,
        margin:0,
        borderBottomColor: '#FDFEFE',
        borderBottomWidth: 1,
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
          <ImageBackground source={require('./images/UP1.png')} style={styles.image} />
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.box}>
              <View style={styles.inputContainer}>
                <Text style={styles.text2}>Email...</Text>
                <TextInput style={styles.textInput} 
                placeholderTextColor="white"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.text2}>Password...</Text>
                <TextInput style={styles.textInput} 
                placeholderTextColor="white"
                secureTextEntry={!isSelected}
                />
              </View>
              <View style={styles.inLine}>
                <CheckBox
                 mT={20} mB={20} mR={20}
                 isSelected = {isSelected}
                 onPress = {handleCheck}
                 />
                <Text style={styles.text3}>Show password</Text>
              </View>
              <TouchableOpacity
               style={styles.button}
               onPress={() => 
                console.log('Sign In Pressed')
               }>
              <Text style={styles.text}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.inLine}>
                <Separator/>
                <Text style={styles.text}>or</Text>
                <Separator/>
              </View>
              <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('SignUpForm')}>
              <Text style={styles.text}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
  );
}

export default SignIn2;
