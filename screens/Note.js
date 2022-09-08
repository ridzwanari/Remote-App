import React,{useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  
} from 'react-native';

import LottieView from 'lottie-react-native';



const Note = ({ item, onPress  }) => {
  const { title, desc } = item;
 
  
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


const woi=async()=>{

  

  const result = await AsyncStorage.getItem('notes')
  if(result!=null)
  {

      const data = JSON.parse(result)
    //  console.log("woi555"+JSON.stringify(item.time))
     
  }


}

  useEffect(() => {
   
  woi()
  //  console.log(item)
  // console.log ("Note"+ JSON.stringify(t))

  }, []);



 
  return (

<View style={{flex:1,alignSelf:'center'}}>
  
 
    <TouchableOpacity  onPress={onPress} style={styles.container}>

{/*       

    <LottieView
    
    source={require('../android/app/assets/ocean.json')}
        
    autoPlay
    loop={true}
    resizeMode="cover"
    style={{

   

       }}

    /> */}
{/* 
    
      <View style={{margin:10}}></View> */}

      <View style={{height:20}}></View>
      <Text style={styles.appButtonText1}>{title}</Text>
      <View style={{height:10}}></View>
      <Text style={styles.appButtonText1}>{desc}</Text>
      <Text>{'     '}</Text>
      <Text style={styles.time}>{formatDate(item.time)}</Text>
     

      
    </TouchableOpacity>
    
    <View style={{}}></View>



    </View>
    

  );
};


const styles = StyleSheet.create({


  container: {



 height:120,
 
//  backgroundColor:'tan',


 width:'100%',
    
  },

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
    color: 'white',
  
  },
 

  time: {
    textAlign: 'right',
    fontSize: 12,
    opacity: 1,
    color:'white',
    left:50

  },
});

export default Note;