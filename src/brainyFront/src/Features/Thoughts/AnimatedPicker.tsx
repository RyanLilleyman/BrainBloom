import React, { useRef } from 'react';
import { Animated } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AnimatedPicker = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          },
        ],
      }}
    >
      <RNPickerSelect
        onOpen={startAnimation}
        onClose={resetAnimation}
        placeholder={{ label: "Select an item...", value: null }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
        style={{
          inputIOS: {
            color: "black",
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
            borderWidth: 0.5,
            borderColor: "gray",
            borderRadius: 4,
            backgroundColor: "white",
          },
          inputAndroid: {
            color: "black",
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
            borderWidth: 0.5,
            borderColor: "gray",
            borderRadius: 4,
            backgroundColor: "white",
          },
          inputWeb: {
            color: "black",
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
            borderWidth: 0.5,
            borderColor: "gray",
            borderRadius: 4,
            backgroundColor: "white",
          },
        }}
      />
    </Animated.View>
  );
};

export default AnimatedPicker;
