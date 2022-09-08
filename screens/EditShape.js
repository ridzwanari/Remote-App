import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,TextInput,Image,TouchableOpacity,Modal,Alert,StatusBar,Button,Pressable,ScrollView,Dimensions} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { SketchPicker } from "react-color";
import ColorPalette from "react-native-color-palette";
import Slider from "@react-native-community/slider";
import { ColorPicker, TriangleColorPicker } from 'react-native-color-picker'



import LinearGradient from "react-native-linear-gradient";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import LottieView from "lottie-react-native";

import { createNavigationContainerRef } from '@react-navigation/native';
import { findNodeHandle } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";





function EditShape ({ onFinish,route,style,navigation,value}) {
    
  TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
  
      
  const [showSquare,setshowSquare] = useState();
  const [showCircle,setshowCircle] = useState();
  const [showRectangle,setshowRectangle] =useState();
  const [showOval,setshowOval] =useState();
  const [showTriangle,setshowTriangle] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [bentuk,setBentuk]=useState('');

  const [title,setTittle]=useState();
  

  const[color,setColor]= useState('')

  const[inputBoxValue,setInputBoxValue]=useState()
  
  const [list, setList] = useState();
  
  

  const[changeColor,setChangeColor] =useState('');

  const [imageSource, setImageSource] = useState()
  const [imageCamera,setImageCamera] = useState()

  const[home,setHome]=useState();


  const { nama } = route.params;
  const { shape } = route.params;
  
  const [nickname, setNickname] = useState([]);
  const [modalVisible1, setModalVisible1] = useState(false);
  
  const [id, setId] = useState()
  const [item, setItem] = useState([])

  
  // const changeShape = ()=>
  
 

  
  const changeShape = (shape)=>{
    setshowSquare(shape == 'Square')
    setshowCircle(shape == 'Circle')
    setshowRectangle(shape == 'Rectangle')
    setshowOval(shape == 'Oval')
    setshowTriangle(shape =='Triangle')

    const navigationRef = createNavigationContainerRef()
 
    // if (navigationRef.isReady()) {
   
    //   navigationRef.navigate('S',{shape});
    // } else {
   
    // }

    }

 


    

    // const handleSubmit =  async(shape,color,imageCamera) => { 
    //     const pro = {shape}
    //     AsyncStorage.setItem('store', JSON.parse(pro));
    //     alert("Data Saved")
    //     console.log("Pro"+ pro)  


    
    const firstLoad = async() => {
    
    try{

      setList(inputBoxValue);
  
      const output = JSON.stringify(list);

       const result = {id,color,shape,imageCamera,imageSource,inputBoxValue}
       await AsyncStorage.setItem('Edit',JSON.stringify(result))
       
      //  console.log("Edit"+JSON.stringify(result))
      } catch (err) {
        console.log(err);
      }
     
      
     
    }

    const message =()=>{

      Alert.alert("Sucessfully Added")

    }

      
    // const addName = async () => {
    //   try {
      
  
    //     await AsyncStorage.setItem('addName', output);
       
   
     
    //   } catch (err) {
    //     console.log(err);
    //   }

    // };
  
  
      
    

      



      //  let nickname=[] 

      //  for(var i=10;i<=result.length;i++)
      //  if(result!==null) 
    
      //  setNickname(result);
       
    
 
    
  useEffect((result) => {
   
    console.log("ROUTE EDIT SHAPE ", JSON.stringify(route.params))
    setId(route.params.id)
    setItem(route.params)


           

    // firstLoad()


    AsyncStorage.getItem('pro').then((value) => {
      if (value != null) {
        const result = JSON.parse(value)
        // console.log("RESULT " +JSON.stringify(result))
        changeShape(result)

      }
    })

    
    
    // async function tempFunction() {
    //   await last();
    // }

    // tempFunction();

    // return () => {};

  }, []);


  

//    const last = async()=>{

//     try {
//     const output = await AsyncStorage.getItem('pro')

//     const beta=JSON.parse(output)
    
    
    
//     // console.log("Nickname"+nickname)
//     setNickname(beta)
//   }
//   catch (err) {
//     console.log(err);
//   }

//  }

    
   

  // const colorChange =(color)=>{

  //   setColorBlue(color =='Blue')
  //   setColorRed(color=='Red');

  //   console.log(colorRed)
  // }
  
  
  
  // const changeBackground =()=>{
  //   let color =
  //   "blue";
  //   setRandomColor(color);

  // }

// const changeBoarder =(value)=>{

  
//   if(  setChangeColor(color="blue"))
//   {
//     setChangeColor(value)
//   }

//   else if (setChangeColor(color="red"))
//   {
//      setChangeColor(value)
//   }

//   else if(setChangeColor(color="yellow"))
//   {
//      setChangeColor(value)
//   }

//   else(setChangeColor(color="purple"))
//   {
//      setChangeColor(value)
//   }
  


//   console.log(value)
 
  

// }

// const changeBoarder1 =()=>{

//   let color1 =('red')

 
// }


// const ControlledColorPicker = () => {
//   let selectedColor = '#C0392B';

  
// }
// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: "App Camera Permission",
//         message:"App needs access to your camera ",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("Camera permission given");
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

  const openCamera=()=>{

    setTittle("openCamera")
    

    const option ={
      mediaType:'CAMERA',
     
    }

    launchCamera(option,(res)=>{
      if(res.didCancel){
        console.log('User Cancelled image picker')
      }else if (res.errorCode){
        console.log(res.errorMessage)
      }else{
        const data =res.assets[0]
        setImageCamera(data.uri)
        console.log("Data Camera"+data.uri)
       
       
        
       
       
      }
    })

  }

  const openGallery=()=>{

    setTittle("openGallery")
    
    

    const option ={
      mediaType:'photo',
   
    }

    launchImageLibrary(option,(res)=>{
      if(res.didCancel){
        console.log('User Cancelled image picker')
      }else if (res.errorCode){
        console.log(res.errorMessage)
      }else{
        const data =res.assets[0]
        setImageSource(data.uri)
        
        console.log("Data Galeery"+data.uri)
      }
    })

  }
  



  
  

    return(

    
       
        <View style={styles.color}>

<LottieView
        
        source={require('../android/app/assets/waves.json')}
      
        autoPlay
        loop={true}
        style={{
          
          
         
        }}
     
       
        
        />

        
          
        

        
        
          {/* <View style={{flexDirection:'row-reverse'}}>
          {
            imageCamera != null &&
          
          <Image source={{uri:imageCamera.uri}}
            style={{height:100,width:100,right:50}}/>    
      

          }
        
          {
            imageCamera != null &&
          
          <Image source={{uri:imageCamera.uri}}
            style={{height:100,width:100,left:50}}/>
          }

          
          </View> */}

{/*        
          <TouchableOpacity   onPress={()=>changeBoarder('blue')}>
           <LinearGradient
             colors={["#00BFFF", "#191970"]}
             style={styles.appButtonContainer}
                >
            <Text style={styles.appButtonText}> Blue color oo </Text>
            </LinearGradient>
          </TouchableOpacity>
        

        <View margin={10}></View>

          <TouchableOpacity  onPress={()=>changeBoarder("red")}>
          <LinearGradient
             colors={["#FF0000", "#F08080"]}
             style={styles.appButtonContainer}
             >

          <Text style={styles.appButtonText}> Red color oo </Text>
          </LinearGradient>
          </TouchableOpacity>

          <View margin={10}></View>

          <TouchableOpacity   onPress={()=>changeBoarder('purple')}>
          <LinearGradient
             colors={["#EE82EE", "#483D8B"]}
             style={styles.appButtonContainer}
             >
          <Text style={styles.appButtonText}> Purple color oo </Text>
          </LinearGradient>
          </TouchableOpacity>
          <View margin={10}></View>

          <TouchableOpacity  onPress={()=>changeBoarder("yellow")}>
          <LinearGradient
             colors={["#FFFF00", "#F0E68C"]}
             style={styles.appButtonContainer}
             >
          <Text style={styles.appButtonText}>  Yellow color oo </Text>
          </LinearGradient>
          </TouchableOpacity> */}
         
        <View margin={10}></View>
            
              
            {title=='color' ? 
             <View
              style={
              showSquare
              ? [styles.squareShapeView,{ backgroundColor:color},] 
              :showCircle
              ? [styles.circleShapeView ,{ backgroundColor:color}]
              :showRectangle
              ? [styles.rectangleShapeView,{ backgroundColor:color}]
              :showOval
              ? [styles.ovalShapeView,{ backgroundColor:color}]
              :showTriangle
              ? [styles.triangleShapeView,{borderBottomColor:color}]
                :''
              }>   
               </View>
               :
               title=='openGallery'
               ?
               <View
              style={
              showSquare
              ? styles.squareShapeView
              :showCircle
              ? styles.circleShapeView
              :showRectangle
              ? styles.rectangleShapeView
              :showOval
              ? styles.ovalShapeView
              :showTriangle
              ?styles.triangleShapeView
                :''
              }>   
              <Image source={{uri:imageSource}} style={{ height:'100%' ,width:'100%',}}/>
              {/* <Text>{imageCamera}</Text> */}
               </View>
               :
               title=='openCamera'
               ?
               <View
               style={
               showSquare
               ? styles.squareShapeView
               :showCircle
               ? styles.circleShapeView
               :showRectangle
               ? styles.rectangleShapeView
               :showOval
               ? styles.ovalShapeView
               :showTriangle
               ?styles.triangleShapeView
                 :''
               }>   
               <Image source={{uri:imageCamera}} style={{ height:'100%' ,width:'100%',}}/>
               {/* <Text>{imageCamera}</Text> */}

                </View>
                
                :
               <View
               style={
               showSquare
               ? styles.squareShapeView
               :showCircle
               ? [styles.circleShapeView ,{ }]
               :showRectangle
               ? [styles.rectangleShapeView,{ }]
               :showOval
               ? [styles.ovalShapeView,{ }]
               :showTriangle
               ? [styles.triangleShapeView,{}]
                 :''
               }> 
               </View>

               }

                  <View height={30}/>
                  <View>

                     <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                        >

                         <View style={styles.modalView}>
                            <TriangleColorPicker
                                onColorSelected={color =>(setColor(color),message())}
                                onPress={()=>(setImageCamera(null),setImageSource(null))}
                              
                       
                                style={{height:200,width:200}} 
                                />
{/*                   
                <SketchPicker
                  color={color}
                  onChangeComplete={(color)=>(setColor(color))}
                  style={{height:100}}
                  
                  /> */}
                  

                                <Pressable  style={[styles.button, styles.buttonClose]}
                                  onPress={() => setModalVisible(!modalVisible)}
                                

                                >

                                  <Text>Hide Modal</Text>

                                </Pressable>
          
                          </View>

                      </Modal>

                   </View>



  

                    {/* {!nama==1?(
                    <View style={styles.buttonTextStyle}>
                    
                      <Button title="Enter Name" onPress={()=>navigation.navigate('Create')}/>
                  
                    </View>

                      ):null}
                      {!nama==0?(

                      <Button title="Edit Name" onPress={()=>navigation.navigate('Create')}/>

                      ):null} */}

                  <View style={{left:35}}>
                
                    <Text style={styles.appButtonText1}>
                        {list}
                    </Text>
                 
                  </View>
                  <View>

                  <View height={30}/>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
        
          setModalVisible1(!modalVisible1);
        }}
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput 
            style={styles.modalText}
            placeholder="Name please..."
            onChangeText={NAMA => setInputBoxValue(NAMA)}


            />

            <TouchableOpacity 
              style={[styles.button, styles.buttonClose]}
              onPress={()=>(firstLoad(),message())}
            
            >
             <Text style={styles.textStyle}>
                Add Name   
              </Text>
            </TouchableOpacity>

            <View margin={10}></View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
              
            >
              <Text style={styles.textStyle}>Hide Model</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.new}
        onPress={() => setModalVisible1(true)}
      >
        <LinearGradient
                            colors={["#00CED1", "white"]}
                            style={styles.appButtonContainer}
                            >
        <Text style={styles.appButtonText1}>Enter Name</Text>
        </LinearGradient>
      </Pressable>
      </View>
   

                      <View height={30}/>

                        
                        <TouchableOpacity   style={{}}
                         onPress={() => {setModalVisible(true),setTittle('color')}}>
                           <LinearGradient
                            colors={["white", "#00BFFF"]}
                            style={styles.appButtonContainer}
                            >

                          <Text style={styles.appButtonText1}>Choose color</Text>
                          </LinearGradient>
                          
                          </TouchableOpacity>

                          <View style={{height:30}}/>
                      
                           <TouchableOpacity 
                           

                            onPress={()=>(openCamera(),setColor(''),setImageSource(null))}
                            
                            style={{}}
                            
                            >
                            <LinearGradient
                            colors={["white", "#00BFFF"]}
                            style={styles.appButtonContainer}
                            >

                       

                          <Text style={styles.appButtonText1}>Camera</Text>
                          </LinearGradient>
                      
                           </TouchableOpacity>

                        
                           <View style={{height:30}}/>


                          <TouchableOpacity 
                            onPress={()=>(openGallery(),setColor(''),setImageCamera(null))}

                            style={{}}
                            
                            >
                            <LinearGradient
                          colors={["#1E90FF", "white"]}
                            style={styles.appButtonContainer}
                            >
                            <Text style={styles.appButtonText1}>Gallery</Text>
                            </LinearGradient>
                        
                    
                          </TouchableOpacity>

                    

                      
                      
{/*                      
                     <TouchableOpacity style={{flex:1 ,marginBottom:100}}>
                      <FlatList
                      
                      data={nickname}
                      
                  
                      keyExtractor={item => item.id.toString()} 
                      renderItem={({ item }) => (
                        <ResizeShape  item={item}  onPress={() => navigation.navigate('S',(item))} />
                      )}
                    />
                        <Text style={{color:'blue'}}>
                          Hi
                        </Text>
                    
                      </TouchableOpacity> */}

                    

                    

                          {/* <TouchableOpacity 
                            onPress={()=>navigation.navigate('S',({shape}))}
                            style={{padding:10,margin:10,backgroundColor:'skyblue'}}
                            
                            >
                            <Text style={styles.appButtonText1}>Shape resize</Text>
                        
                          </TouchableOpacity> */}

                          <View style={styles.next}>
                          <TouchableOpacity
                          
                          onPress={()=>(navigation.navigate('S',({shape, id:id,item:item}),setColor(color),firstLoad()))}

                        
                          >
                             <LinearGradient
                           colors={["skyblue", "blue"]}
                            style={styles.appButtonContainer}
                            >

                          <Text style={styles.appButtonText1}>Next</Text>
                          </LinearGradient>

                          </TouchableOpacity>
                          </View>

                          <View style={styles.next_1}>
                          <TouchableOpacity
                          
                          onPress={()=>(navigation.navigate('Canvas',({shape, id:id,item:item}),setColor(color),firstLoad()))}

                        
                          >
                             <LinearGradient
                           colors={["blue", "skyblue"]}
                            style={styles.appButtonContainer}
                            >

                          <Text style={styles.appButtonText1}>Back</Text>
                          
                          </LinearGradient>

                          </TouchableOpacity>
                          </View>

                       

                          {/* <Button title="Next 2" onPress={()=>navigation.navigate('S',(firstLoad))}/> */}

                        
 

                        </View>
       
      
)
}


  const styles = StyleSheet.create({

    

    color:{
      flex: 1,
      borderColor:'white',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'lightskyblue',
    
      


    },



    container: {
      flex: 1,
     
      alignItems: 'center',
      justifyContent: 'center',
    },
   
    text: {
      textAlign: 'center',
      padding: 14,
      fontSize: 15,
      color:'black',
      marginTop:30
    },

    title: {
      fontSize: 32,
      color:'black',
      
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
     
      borderRadius: 1,
      borderWidth:10
    
      
    },
    rectangleShapeView: {
      width: 120 * 2,
      height: 120,
     borderRadius:2,
     borderColor: 'black',

    
     borderWidth:10
      
    },
    circleShapeView: {
      width: 120,
      height: 120,
      borderRadius: 120 / 2,
      borderColor: 'black',
      borderWidth: 5,
    },
    ovalShapeView: {
      width: 120,
      height: 120,
      borderRadius: 60,
     
      borderColor: '#e9c46a',
      transform: [{ scaleX: 2 }],
      borderColor: 'black',
      borderWidth:10,
      justifyContent:'center'
    },

    triangleShapeView: {
      width: 0,
      height: 0,
    
      borderStyle: 'solid',
      borderLeftWidth: 60,
      borderRightWidth: 60,
      borderBottomWidth: 120,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'black',
  
      transform: [{ rotate: '180deg' }]
    },  
    
      button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop:40,
      },
      buttonOpen: {
      margin:30,
      backgroundColor: "blue",
      fontSize:15
      },
      buttonClose: {
      backgroundColor: "#2196F3",
      bottom:20
      },
      
      buttonTextStyle:{
        padding:5,
        color:'white',
        textAlign:'center',
        fontSize:15,
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
        alignSelf: 'center',
       
        marginBottom: 10,
        opacity: 0.5,
        color:'black',
      },
      
      appButtonContainer: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },

      appButtonText1: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        width:120,
        left:10

      },

      modalView: {
      
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height:250,
        backgroundColor:'black',
        top:400
      },

      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      },
      modalView: {
        margin: 20,
       
        backgroundColor: "skyblue",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundcolor:'skyblue'
      },
      buttonOpen: {
        backgroundColor: "blue",
      },
      buttonClose: {
        backgroundColor: "skyblue",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width:100
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        backgroundColor:'black',
      
        color:'white'
      },

      next:{

        position: 'absolute',
        right: 15,
        bottom: 10,
        height:100,
        zIndex: 1,
    

      },

      next_1:{

        position: 'absolute',
        left: 15,
        bottom: 10,
        height:100,
        zIndex: 1,
    

      },

      new:{
        flexDirection:'row',
        


      }
});
export default EditShape