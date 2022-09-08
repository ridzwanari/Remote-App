import React from 'react';
import { View, StyleSheet,TouchableOpacity, TextInput,Image } from 'react-native';
import Submitbutton from './Submitbutton';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        
        placeholder= {'Tittle/Description'}
      />
   
   
     
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
 
    height: 50,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
   backgroundColor:'#87CEFA'
  },
  container: {
    justifyContent: 'center',
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;