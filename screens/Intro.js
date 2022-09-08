import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';




const Intro = ({ onFinish }) => {
  const [name, setName] = useState('');
  const handleOnChangeText = text => setName(text);

  const handleSubmit = async () => { 
    const user = { name: name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    if (onFinish) onFinish();
  }; 

  return (
    <>
    
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to Continue</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder='Enter Name'
          style={styles.textInput}
        />
        <TouchableOpacity onPress={handleSubmit}>
         {name.trim().length >= 3 ? (
          <Image source={require('../Image/plus.png')}   />
        ) : null}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
   
    
    height: 50,
    color:'black',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Intro;