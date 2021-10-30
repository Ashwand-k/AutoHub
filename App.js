import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from '../casestudyy/screens/WelcomeScreen';
import WelcomeScreenTwo from './screens/WelcomeScreenTwo';
import PaymentScreen from './screens/PaymentScreen';
import ThankingScreen from './screens/ThankingScreen';
import LoginScreen from './screens/LoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
     {/* <WelcomeScreen/> */}
     {/* <WelcomeScreenTwo/> */}
     {/* <PaymentScreen/> */}
     {/* <ThankingScreen/> */}
     {/* <LoginScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
