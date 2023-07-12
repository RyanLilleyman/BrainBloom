import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  ViewStyle,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

type Styles = {
    separator: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})


const GeneralButton = () => {
    
}



const Separator = () => (
  <View style={styles.separator} />
)