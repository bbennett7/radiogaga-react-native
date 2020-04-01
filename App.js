import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import COLORS from './src/shared/style/colors';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>radio gaga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.rgRed,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    color: COLORS.rgBlueGrey,
    fontFamily: 'SpicyRice-Regular',
    fontSize: 60
  }
});
