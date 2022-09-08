import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Modal, Alert, Dimensions } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { SketchPicker } from "react-color";


const Create = ({ onFinish, result, navigation }) => {
  const [nama, setNama] = useState('');

  const [inputBoxValue, setInputBoxValue] = useState('');

  const [storageDataList, setStorageDataList] = useState([]);

  const handleOnChangeText = text => setNama(text);

  const addItemToList = async () => {
    try {
      storageDataList(inputBoxValue);

      const output = JSON.stringify(storageDataList);

      await AsyncStorage.setItem('itemlist', output);
      setInputBoxValue('');


    } catch (err) {
      console.log(err);
    }

  };

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');

      const output = JSON.parse(data);

      setStorageDataList(output);


    } catch (err) {
      console.log(err);
    }


  };

  useEffect(() => {
    async function tempFunction() {
      await getItemList();
    }

    console.log(storageDataList)
    tempFunction();

    return () => { };

    console.log(nama)

  }, []);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={inputBoxValue}
        placeholder="Enter Data"
        onChangeText={value => setInputBoxValue(value)}
      />



      <View style={styles.list}>
        {/* <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30, color:'black'}}>
            Array List
          </Text> */}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addItemToList()}>
          <Text style={{ color: '#fff' }}>Add</Text>
        </TouchableOpacity>


        {/*   
          {storageDataList.map((item, index) => {
            return (
              <Text style={{marginVertical: 10,color:'black'}} key={index}>
                {item}
              </Text>
            );
          })} */}


      </View>
    </View>
  );
}



// return(

//     <View style={styles.container}>

//      <Text style={styles.inputTitle} >Enter Your Name to Continue</Text>
//         <TextInput
//         value={result}
//         onChangeText={handleOnChangeText}
//         placeholder='Enter Name'
//         style={styles.textInput}

//          />

//     <TouchableOpacity  onPress={()=>navigation.navigate('EditShape',{nama})}>
//      {nama.trim().length >= 1 ? (
//       <Image source={require('../Image/checked.png')} style={styles.addButton}  />
//     ) : null}

//     </TouchableOpacity>


//     </View>







const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,

    backgroundColor: 'black',
    height: 50,
    color: 'white',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
    top: 200,
  },
  inputTitle: {
    alignSelf: 'center',


    opacity: 0.5,

  },

  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: 'black',
    top: 200,

    marginHorizontal: 8,

  },
  addButton: {

    backgroundColor: 'blue',
    marginHorizontal: 10,
    alignSelf: 'center',
    padding: 10,
    top: 200,
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Create