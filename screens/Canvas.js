import React, { useState, useEffect, useContext, createContext } from "react";
import { Text, Button, StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Modal, TextInput, Image,StatusBar } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import LinearGradient from "react-native-linear-gradient";

import Created from "./Created";




function Canvas({ route, result, navigation }) {


  const [showSquare, setshowSquare] = useState();
  const [showCircle, setshowCircle] = useState();
  const [showRectangle, setshowRectangle] = useState();
  const [showOval, setshowOval] = useState();
  const [showTriangle, setshowTriangle] = useState();
  const [modalVisible, setModalVisible] = useState(false);


  const [nickname, setNickname] = useState([]);

  const [item, setItem] = useState([]);

  const [id, setId] = useState()

  // const { shape } = route.params;

  const { title, desc } = route.params;

  // const final =()=>{


  //   navigation.navigate('Cs');

  // }

  const changeShape = async (shape) => {

    setshowSquare(shape == 'Square')
    setshowCircle(shape == 'Circle')
    setshowRectangle(shape == 'Rectangle')
    setshowOval(shape == 'Oval')
    setshowTriangle(shape == 'Triangle')



    try {
      const result = shape


      await AsyncStorage.setItem('pro', JSON.stringify(result))

      setNickname(result)


    } catch (err) {

    }


    navigation.navigate('EditShape', { shape: shape, id: id })
  }



  useEffect(() => {
    console.log("ROUTE PARAMS " + route.params.id)
    // setItem(route.params)
    setId(route.params.id)

    

  }, []);

  return (


   
    <View style={styles.container}>
   

      
      
<StatusBar barStyle='dark-content'  backgroundColor= "transparent" />





          
<LottieView
        
        source={require('../android/app/assets/waves.json')}
      
        autoPlay
        resizeMode="cover"
        loop={true}
        style={{
          
          
         
        }}
     
       
        
        />

<LottieView
        
        source={require('../android/app/assets/turtle.json')}
      
        autoPlay
        loop={true}
        resizeMode="contain"
        style={{

        top:300,
        right:100,
        position:'absolute'

          
    
        }}
        />

        
<LottieView
        
        source={require('../android/app/assets/ikan_gemok.json')}
      
        autoPlay
        loop={true}
        resizeMode="contain"
        style={{

        bottom:300,
        left:100

          
    
        }}
        />
       
         
          
          

      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
        onPress={() => { changeShape('Square') }}


      >
        
        <View style={styles.appButtonContainer}>
        <LinearGradient
                            colors={["#00CED1", "white"]}
                            style={styles.appButtonContainer}
                            >

          <Text style={styles.appButtonText}>Square</Text>
          </LinearGradient>

        </View>

      </TouchableOpacity>

          <View style={{width:50}}/>
    
      <TouchableOpacity
        onPress={() => changeShape('Circle')}

      >
        <View style={styles.appButtonContainer}>
        <LinearGradient
                            colors={["#00CED1", "white"]}
                            style={styles.appButtonContainer}
                            >

          <Text style={styles.appButtonText}>Circle</Text>
          </LinearGradient>

        </View>

      </TouchableOpacity>
      </View>

      <View style={{ height: 50 }} />

      <View style={{flexDirection:'row'}}>


      <TouchableOpacity

        onPress={() => changeShape('Rectangle')}

      >
        <View style={styles.appButtonContainer}>
        <LinearGradient
                            colors={["white", "#00BFFF"]}
                            style={styles.appButtonContainer}
                            >

          <Text style={styles.appButtonText}>Rectangle</Text>
          </LinearGradient>

        </View>

      </TouchableOpacity>

      <View style={{width:50}}/>
     

      <TouchableOpacity

        onPress={() => changeShape('Oval')}

      >


        <View style={styles.appButtonContainer}>
        <LinearGradient
                            colors={["white", "#00BFFF"]}
                            style={styles.appButtonContainer}
                            >

          <Text style={styles.appButtonText}>Oval</Text>
          </LinearGradient>

        </View>

      </TouchableOpacity>
      </View>

      <View style={{ height: 50 }} />

      <TouchableOpacity

        onPress={() => changeShape('Triangle')}


      >
        <View style={styles.appButtonContainer_1}>
        <LinearGradient
                            colors={["#1E90FF", "white"]}
                            style={styles.appButtonContainer}
                            >

          <Text style={styles.appButtonText}>Triangle</Text>
          </LinearGradient>

        </View>

      </TouchableOpacity>

      <View style={{ margin: 20 }} />



      <Text style={styles.appButtonText1}>

        Title: {title}

        {"\n"}


      </Text>




      <Text style={styles.appButtonText1}>

        Desc: {desc}
        
        {"\n"}

      </Text>



      {/* <TouchableOpacity
          onPress={()=>final()}

          >

          <View style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>See Result</Text>
          </View>

          </TouchableOpacity> */}

          
          </View>

  


  )



}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',
   
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    padding: 14,
    fontSize: 15,
    color: 'black',
    marginTop: 30
  },

  title: {
    fontSize: 32,
    color: 'black'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  shape_container: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  squareShapeView: {
    width: 120,
    height: 120,
    backgroundColor: '#264653',
  },
  rectangleShapeView: {
    width: 120 * 2,
    height: 120,
    backgroundColor: '#2a9d8f'
  },
  circleShapeView: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: '#e9c46a',
    borderWidth: 5,
  },
  ovalShapeView: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f4a261',
    transform: [{ scaleX: 2 }],
  },
  triangleShapeView: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e76f51',
    transform: [{ rotate: '180deg' }]
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 40,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  textInput: {
    borderWidth: 2,


    height: 50,
    color: 'black',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'center',

    marginBottom: 10,
    opacity: 0.5,
    color: 'black',
  },

  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    top:10
    
  },

  appButtonText1: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  appButtonContainer: {
    elevation: 10,

    height:50,
    alignSelf:'center',
  
    
   
  
    width: 100,



  },

  appButtonContainer_1: {
    elevation: 10,

    height:50,
    alignSelf:'center',
  
    
   
    width: 350,



  },

  cover:{

    backgroundColor:'#00BFFF',
    height:600,
    width:100,
    paddingTop:0,
    alignSelf:'center',
    
  }

});


export default Canvas