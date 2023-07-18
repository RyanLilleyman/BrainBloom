import React, { useState, useEffect } from 'react';
import { Button, TextInput, View, StyleSheet, Text, ImageBackground } from 'react-native';
import CheckBoxNoTouch from '../../universal-components/checkboxNoTouch';

interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [lengthCheck, setLengthCheck] = useState(false);
  const [capitalCheck, setCapitalCheck] = useState(false);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [lowerCheck, setLowerCheck] = useState(false);
  const [numberCheck, setnumberCheck] = useState(false);
  
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
   
 
  const handleChange = (text) => {
    setPassword(text);
    setPasswordStrength(calculatePasswordStrength(text));
  };

  const handleSubmit = () => {

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log(`Email: ${email}, Password: ${password}`);
      // Make your API call here
    }
  };

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./images/UP1.png')} style={styles.image} />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={handleChange}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder={'Confirm password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Text>Password Strength: {weakToStrong(passwordStrength)}</Text>
      
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
      <Button title={'Submit'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#dee3d2',
  },
  input: {
    height: 40,
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
});

export default SignupForm;
