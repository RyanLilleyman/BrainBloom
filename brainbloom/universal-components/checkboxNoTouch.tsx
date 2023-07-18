import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CheckBoxNoTouch(props) {
  return (
    <TouchableOpacity
      style={{
        marginBottom:props.mB,
        marginTop:props.mT,
        marginRight:props.mR,
        marginLeft:props.mL,
        height: 10, 
        width: 10,
        borderWidth: 1,
        borderColor: '#404040',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.isSelected && <Text style={{
        fontSize: 10,
        color: '#404040'}}>X</Text>}
    </TouchableOpacity>
  );
}
