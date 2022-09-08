import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../contexts/NoteProvider';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
  
} from 'react-native';


import LottieView from 'lottie-react-native';
import { TwitterPicker } from 'react-color';
import { useNavigation } from '@react-navigation/native';



function NewScreen({route,item}) {
   


const formatDate = ms => {

  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }   

  const date = new Date(ms);


  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const suffix = hrs >= 12 ? "PM":"AM";
  // const hours = ((hrs + 11) % 12 + 1) + suffix
  const monthName = months[date.getMonth()]

  return `${day}-${monthName}-${year} - ${hrs}:${min} ${suffix}`;
};

const [test,testing]= useState()
const navigation = useNavigation(); 

// const { title, desc } = route.params; 
const woi=async()=>{

 try{
    if (value !== null) {
      // We have data!!
      console.log(value); 
    }
  } catch (error) {
    // Error retrieving data
  }
  
  }

  const [nama,setNama]= useState()
  const[inputBox,setInputBox]=useState()
  

  const message =()=>{

    Alert.alert("Sucessfully Added")

  }

  
  const load= async()=>{

    
    try {

      let result = inputBox
      await AsyncStorage.setItem('ola',JSON.stringify(result))
      // console.log("result"+JSON.stringify(result))
  

    } catch (error) {
      // Error saving data
    }
  
  }

  const loading = async()=>{

    try {
      const value =  await AsyncStorage.getItem('ola');
      if (value !== null) {
        
        console.log("Value"+value)
        setNama(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  }


  useEffect(() => {

    loading()
    console.log("ROUTE PARAMS " + JSON.stringify(route.params))


   }, []);



 
  return (

    <View style={{flex:1}}>

      <ImageBackground source={require('../Image/pulau.jpeg')} resizeMode='cover' style={{flex:1}}>
      <View style={{height:200}}></View>


        <Text style={styles.appButtonText1}>Enter shape</Text>
      <View style={{height:100}}></View>

      <TextInput 
           
            style={styles.modalText}
            placeholder="Name please..."
            onChangeText={nama => setInputBox(nama)}

      />

        <TouchableOpacity 
              
              onPress={()=> (load(),loading())}
            
        >

          <Text style={styles.appButtonText1}>
                Add   
          </Text>

        </TouchableOpacity>


         <View style={{height:100}}></View>
         <Text style={styles.appButtonText1}>{nama}</Text>
         </ImageBackground>

    </View>
    

  );
};


const styles = StyleSheet.create({




  appButtonText1: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf:'center'

  
  
  },
  
  // appButtonContainer: {
  //   elevation: 8,
  //   borderRadius: 10,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12,
  //   backgroundColor:'skyblue',
  //   width:200
    
  // },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  
  },
 

  time: {
    textAlign: 'right',
    fontSize: 12,
    opacity: 1,
    color:'white',
    left:50

  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    backgroundColor:'black',
  
    color:'white'
  },
});

export default NewScreen;