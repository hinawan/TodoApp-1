import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form </Text>
      <TextInput
        style={styles.input}
        placeholder='Email'/>
      <TextInput 
        style={styles.input}
        placeholder='Password'
        secureTextEntry/>
      <TouchableOpacity 
        style={styles.button}
        oonPress={handleLogin()}>
        <Text style={styles.buttonText}>Login</Text> 
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'Center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333'
  },
  input:{
    width: '80%',
    height: 50,
    borerColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    addingHorizontal: 10,
    backgroundColor: '#FFF',
    marginBottom: 16
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWight: 'bold'
  },
});

export default App;
