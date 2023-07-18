import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CheckBox(props) {

    const onCheck = () =>
    {
        props.onPress();
    }
  return (
    <TouchableOpacity
        onPress={onCheck}  // Add this line
      style={{
        marginBottom:props.mB,
        marginTop:props.mT,
        marginRight:props.mR,
        marginLeft:props.mL,
        height: 20, 
        width: 20,
        borderWidth: 1,
        borderColor: '#404040',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.isSelected && <Text>✓</Text>}
    </TouchableOpacity>
  );
}
