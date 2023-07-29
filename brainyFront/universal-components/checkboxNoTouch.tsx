import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface CheckBoxNoTouchProps {
  isSelected: boolean;
  mB?: number;
  mT?: number;
  mR?: number;
  mL?: number;
}

const CheckBoxNoTouch: React.FC<CheckBoxNoTouchProps> = (props) => {
  const { isSelected, mB, mT, mR, mL } = props;

  const containerStyle: ViewStyle = {
    marginBottom: mB,
    marginTop: mT,
    marginRight: mR,
    marginLeft: mL,
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textStyle: TextStyle = {
    fontSize: 8,
    color: '#F5F5F5',
  };

  return (
    <TouchableOpacity style={containerStyle}>
      {isSelected && <Text style={textStyle}>&#10003;</Text>}
    </TouchableOpacity>
  );
};

export default CheckBoxNoTouch;
