import React, { useState, useEffect, useCallback } from 'react';
import {
 TextInput,
 View,
 StyleSheet,
 Text,
 ImageBackground,
 ScrollView,
 TouchableOpacity


} from 'react-native';
import CheckBoxNoTouch from '../../universal-components/checkboxNoTouch';

interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordStrength, setPasswordStrength] = useState<number>(0);
    const [lengthCheck, setLengthCheck] = useState<boolean>(false);
    const [capitalCheck, setCapitalCheck] = useState<boolean>(false);
    const [specialCheck, setSpecialCheck] = useState<boolean>(false);
    const [lowerCheck, setLowerCheck] = useState<boolean>(false);
    const [numberCheck, setnumberCheck] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    const [isLoading, setisLoading] = useState<boolean>(false);


  React.useEffect(() => {
    console.log(lengthCheck, capitalCheck, specialCheck, lowerCheck, numberCheck);
  }, [lengthCheck, capitalCheck, specialCheck, lowerCheck, numberCheck]);
  

  const calculatePasswordStrength = (password) => {
    let strengthCounter = 0;
    setCapitalCheck(false);
    setSpecialCheck(false);
    setLowerCheck(false);
    setnumberCheck(false);
    setLengthCheck(false);


    if (password.length >= 8){
        strengthCounter++;
        setLengthCheck(true);
    }
    if (/[A-Z]/.test(password)){
        strengthCounter++;
        setCapitalCheck(true);
    } 
    if (/[a-z]/.test(password)){
        strengthCounter++;
        setLowerCheck(true);
    } 
    if (/[0-9]/.test(password)){
        strengthCounter++;
        setnumberCheck(true);
    } 
    if (/[^A-Za-z0-9]/.test(password)){
        strengthCounter++;
        setSpecialCheck(true);
    }  // checks for special characters


      
    return strengthCounter;
  };
  
  const weakToStrong = (strength) =>{
        if(strength === 0){
            console.log(strength);
            return 'nothing';
        }else if(strength === 1){
            console.log(strength);
            return 'very weak';
        }else if(strength === 2){
            console.log(strength);
            return 'weak';
        }else if(strength === 3){
            console.log(strength);
            return 'medium';
        }else if(strength === 4){
            console.log(strength);
            return 'strong';
        }else if(strength === 5){
            return 'very strong';
        }
    }
   
    const isValidEmail = (email: string) => {
        const regex = /\S+@\S+\.\S+/;
      
        return regex.test(email);
      };
      

  const handleChange = useCallback((text: string) => {
    setPassword(text);
    setPasswordStrength(calculatePasswordStrength(text));
  }, []);
  

  
  const handleSubmit = useCallback(() => {
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    if (!password){
        alert('Passwords cannot be empty.');
        return;
    }
    if (!email){
        alert('Email cannot be empty.');
        return;
    }
    if (passwordStrength < 3){
        alert('Password is too weak.')
        return;
    }else if (password !== confirmPassword) {
        alert('Passwords do not match!');
        } else {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setCapitalCheck(false);
        setSpecialCheck(false);
        setLowerCheck(false);
        setnumberCheck(false);
        setLengthCheck(false);
        setPasswordStrength(0);
        console.log(`Email: ${email}, Password: ${password}`);
        // Make your API call here
        }
  },[email,password,passwordStrength,confirmPassword]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#dee3d2',
    },
    input: {
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
    inLine: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
          
      resizeMode: 'cover',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'rgba(244, 246, 243, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70%',
      width: '98%',
      
    },
    textInput:{
      flex: 1,
      height: 30,
      
      borderBottomColor: '#1B4D5C',
      borderBottomWidth: 1,
    },
    inputContainer :{
      width: 250,
      height: 90,
      display: 'flex',
    },
    text2: {
      color: '#404040',
      fontSize: 18,
      opacity:1,
      marginTop: 30
    },
    inLineContainer:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    button: {
      width: 150,
      backgroundColor: '#03363D',
      marginVertical: 20,
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 10,
    },
    text4:
      {
        color: '#F5F5F5',
        fontSize: 22,
        textAlign:'center',
        opacity:1,
        marginHorizontal:10,
      },
    text3: {
        fontSize: 16,
    }
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/UP23.png')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.box}> 
        <View style={styles.inputContainer}>
            <Text style={styles.text2}>Email...</Text>
            <TextInput
            accessible={true}
            accessibilityLabel="Email"
            accessibilityHint="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
            />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.text2}>Password...</Text>
        <View style={styles.inLine}>  
            <TextInput
            accessible={true}
            accessibilityLabel="Password"
            accessibilityHint="Enter your password"
            value={password}
            onChangeText={handleChange}
            secureTextEntry={!isPasswordVisible}  
            style={styles.textInput}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}> 
                {isPasswordVisible ? <Text style={styles.text3}>Hide</Text>
                 : <Text style={styles.text3}>Show</Text>}
            </TouchableOpacity>
        </View>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.text2}>Confirm Password...</Text>
        <View style={styles.inLine}> 
            <TextInput
            accessible={true}
            accessibilityLabel="Confirm Password"
            accessibilityHint="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!isConfirmPasswordVisible}  
            style={styles.textInput}
            />
            <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
                {isConfirmPasswordVisible ? <Text style={styles.text3}>Hide</Text>
                 : <Text style={styles.text3}>Show</Text>}
            </TouchableOpacity>
        </View>
        </View>



      
      
      
      {passwordStrength > 0 && <Text>Password Strength: {weakToStrong(passwordStrength)}</Text>}
      <View style={styles.inLineContainer}>
      <View style={styles.inLine}>
        <CheckBoxNoTouch mT={10} mB={10} isSelected={lengthCheck}/>
        <Text> Minimum 8 Characters</Text>
      </View>
      <View style={styles.inLine}>
        <CheckBoxNoTouch mT={10} mB={10} isSelected={capitalCheck}/>
        <Text> Contains Capital Letter</Text>
      </View>
      <View style={styles.inLine}>
        <CheckBoxNoTouch mT={10} mB={10} isSelected={specialCheck}/>
        <Text> Contains Special Character</Text>
      </View>
      <View style={styles.inLine}>
        <CheckBoxNoTouch mT={10} mB={10} isSelected={lowerCheck}/>
        <Text> Contains Lower Case Character</Text>
      </View>
      <View style={styles.inLine}>
        <CheckBoxNoTouch mT={10} mB={10} isSelected={numberCheck}/>
        <Text> Contains Number</Text>
      </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}>
        <Text style={styles.text4}>Submit</Text>
      </TouchableOpacity>
      
      
      </View>
      </ScrollView>
    </View>
  );
};



export default SignupForm;