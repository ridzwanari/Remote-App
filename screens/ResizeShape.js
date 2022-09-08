import React, { useRef,useEffect,useState } from "react";
import { Animated, View, StyleSheet, PanResponder, useWindowDimensions,Text ,navigation,Image, Button,Modal,Pressable, TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import Note from "./Note";
import LinearGradient from "react-native-linear-gradient";

import { useNotes } from '../contexts/NoteProvider';

import { useFinal } from "../contexts/FinalProvider";

import LottieView from "lottie-react-native";







function ResizeShape  ({navigationRef,route,navigation})  {

 
const [nickname, setNickname] = useState();
const[color,setColor]=useState('');




// const {color} = route.params


const [title,setTittle]=useState();

const [imageSource, setImageSource] = useState()
const [imageCamera,setImageCamera] = useState()

const [storage,setStorage]=useState([])

const { notes, setNotes, findNotes } = useNotes();


const { nick,setNick, findFinal} =useFinal();

const [id, setId] = useState()

const[item,setItem] = useState([])




useEffect((result,data) => {
   
  // console.log({shape})

    changeShape(shape)

    console.log( "ROUTE RESIZE  :"+JSON.stringify(route.params.id))
    setId(route.params.id)
    setItem(route.params.id)

    // console.log("Resultsss"+JSON.stringify(storage))
    SecondLoad()

    console.log("storagezz"+JSON.stringify(storage))


      // const value = AsyncStorage.getItem('hello4')
    

      // console.log("ferhf"+JSON.stringify(value))
      
  
    
 

  }, 
  []);


  // const GET =async()=>{

  //   console.log(nickname)
  //   var temp =[]
  //   var k =[]


  //   const result = await AsyncStorage.getItem('pro')
  //   if(result!==null)
  //   {
  //     temp=result
  //     console.log(JSON.stringify(result))
  //   }
  //   else{
  //     console.log("no")
  //   }

  //   //    k.push(nickname)
  //   //    console.log("Nickname"+JSON.stringify(k))

 

    
  // }
    
const SecondLoad = async() => {
  try {
  const value =  await AsyncStorage.getItem('Edit')
   
    if (value !== null) {
      // We have data!!
      const data = JSON.parse(value)
    

   
       setColor(data.color)
       setImageCamera(data.imageCamera) 
       setImageSource(data.imageSource) 
       setId(data.id)

      // console.log("Almost done :" + JSON.stringify(data))
      //  console.log("output 123121  "+JSON.stringify(data))

    }
  } catch (error) {
    // Error retrieving data
  }

  // try {
   
  
  //   const result = {color,shape,imageCamera,imageSource, scale}

  //   output = result

  //   await AsyncStorage.setItem('Edit',JSON.stringify(result)) 
  // } catch (error) {
  //   // Error saving data
  // }

   }

   const Navigate =async() => {


//     var oi = {}
//     var temp =[]
   
    
//     AsyncStorage.getItem('A').then((value) => {
//       if(value!=null){


//       const result =JSON.parse(value)

//       // console.log("ferhf"+JSON.stringify(result))
      
//       if(result.length==3){
//         console.log("LIMIT 3")
//       }
//       else
//       {
    
//       oi = {item:id,id:id,color:color,shape:shape,imageCamera:imageCamera,imageSource:imageSource,scale}
//       result.push(oi)
//       AsyncStorage.setItem('A',JSON.stringify(result))
//     }
//     setStorage(result)
//     console.log("RESULT " +JSON.stringify(result))
//   }
//   else {
//     temp.push({item:id,id:id,color:color,shape:shape,imageCamera:imageCamera,imageSource:imageSource,scale})
//     console.log("NO VALUE")
//     AsyncStorage.setItem('A', JSON.stringify(temp))
//     setNotes(temp)

//   }

  
// })

  try {

   

    var temp = []
   

    let bola = {id:id,color:color,shape:shape,imageCamera:imageCamera,imageSource:imageSource,scale:scale}
    

    
    const result = await AsyncStorage.getItem('hello4')

  
    
    if(result!=null){


      const value = JSON.parse(result)

      // let value = JSON.parse(result)
     
      temp=value

      // console.log("fefiewf"+JSON.stringify(temp))

      if(value.length<3)
      {
        temp.push({"key":[value.length] ,"value":bola})

        setStorage(temp)
     
        // console.log("Storagezzdadew"+JSON.stringify(storage))

      }  
      console.log("Temp"+JSON.stringify(temp))
      await AsyncStorage.setItem('hello4',JSON.stringify(temp)) 
       
     
    
    }
    else {

      temp.push({"key":[0] ,"value":bola})


      await AsyncStorage.setItem('hello4',JSON.stringify(temp))
      console.log("output 3"+JSON.stringify(temp))
    }

 
   } catch (err) {
     console.log(err);
   }

  

navigation.navigate('C',({shape}))
   
    
   

  }
    
       
    
      
    
      
    //  for(var i =0; i<value.length; i++)
     
    //    {

    //     // console.log("value for "+i+" :"+JSON.stringify(value[i]))

       
    //     if(value.length!=10)
    //     {
    //       console.log("value for "+i+" :"+JSON.stringify(value[i]))
    //       // console.log('temp : ' +JSON.stringify(value[i]))
    //        temp.push({"key":[i] + [value]})

    //     }

    //     else{

    //       console.log("cukup")
    //     }
         
    //    }
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const scale = useRef(new Animated.Value(1)).current;

  const dimensions = useWindowDimensions();
  
  const IMAGE_URI =
  "https://static.vecteezy.com/system/resources/previews/000/227/410/original/cute-octopus-vector-illustration.jpg"


const pointsDistance = ([xA, yA], [xB, yB]) => {
  return Math.sqrt(
    Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
  );
};
const panResponder = useRef(
  PanResponder.create({

    onStartShouldSetPanResponder: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
      // More accurate than gestureState.numberActiveTouches
      // https://github.com/facebook/react-native/blob/8a31dfe567a22dbc018ea763b0a9706068276c4a/Libraries/Interaction/PanResponder.js#L383-L384
      const activeTouches = event.nativeEvent.changedTouches.length;

      if (activeTouches === 1) {
        pan.setValue({
          x: gestureState.dx,
          y: gestureState.dy,


       
       
       
        })
        

       
      } else if (activeTouches >= 2) {
        const touches = event.nativeEvent.changedTouches;

        const touchA = touches[0];
        const touchB = touches[1];

        const distance = pointsDistance(
          [touchA.pageX, touchA.pageY],
          [touchB.pageX, touchB.pageY]
        );

        const screenMovedPercents = distance / dimensions.width;

       
        scale.setValue(1 + screenMovedPercents *1);

      }
    },

   
   
  })
).current;


 
const [showSquare,setshowSquare] = useState();
const [showCircle,setshowCircle] = useState();
const [showRectangle,setshowRectangle] =useState();
const [showOval,setshowOval] =useState();
const [showTriangle,setshowTriangle] = useState();

const { shape } = route.params

const changeShape = (shape)=>{
  setshowSquare(shape == 'Square')
  setshowCircle(shape == 'Circle')
  setshowRectangle(shape == 'Rectangle')
  setshowOval(shape == 'Oval')
  setshowTriangle(shape == 'Triangle')
}

const FinalLoad = async() => {
          
    
  // const result =  await AsyncStorage.getItem('pro')
  try {
    const value = await AsyncStorage.getItem('pro');
    if (value !== null) {
      // We have data!!
      const data = JSON.parse(value)
       setColor(data.color)
       setImageCamera(data.imageCamera) 
       setImageSource(data.imageSource) 

    
   
    }
  } catch (error) {
    // Error retrieving data
  }

 
 
    // console.log(JSON.stringify(result.color))
    
 
   }

    
    
  // const final = async()=>{

  //   var temp=[]
    




  //   const value =await AsyncStorage.getItem('pro')
    
  //   temp.push(value)
  //   setStorage(temp)


    
  //   alert.Alert("Data added")

       
       
  //   setStorage(data)
  //   var temp = []


  //   for(var i =0; i<=setStorage.length; i++){
  //       console.log('Data ' +setStorage[i])
  //       temp.push({"key":[i] ,"Data":setStorage[i]})
      
      
  //     }
  //     setStorage(temp)
    

  //   console.log("storage"+JSON.stringify(storage))
       
          

          
  //       }



  return (
    <View style={styles.container}>


     
<LottieView
        
        source={require('../android/app/assets/waves.json')}
      
        autoPlay
        resizeMode="cover"
        loop={true}
        style={{
          
          
         
        }}
     
       
        
        />

        <LottieView
        
        source={require('../android/app/assets/dolphin.json')}
      
        autoPlay
        resizeMode="center"
      
        loop={true}
        style={{
          
          top:200
          
         
        }}
     
       
        
        />
  <Animated.View
    {...panResponder.panHandlers}
    
    source={IMAGE_URI}
    style={{
      
      height: 100,
      
     
      width: '50%',
      borderRadius: 10,
      transform: [
        // or pan.getTranslateTransform()
        { translateX: pan.x },
        { translateY: pan.y },
        { scale },

      
      ],
    }}
    >
        
          
            {color!=''?
            
             <View
             
              style={
              showSquare
              ? [styles.squareShapeView,{ backgroundColor:color}] 
              :showCircle
              ? [styles.circleShapeView ,{ backgroundColor:color}]
              :showRectangle
              ? [styles.rectangleShapeView,{ backgroundColor:color}]
              :showOval
              ? [styles.ovalShapeView,{ backgroundColor:color}]
              :showTriangle
              ? [styles.triangleShapeView,{ borderBottomColor:color}]
                :''
              }>   
               </View>
               :

              imageCamera!==null?
               
              
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
               <Image source={{uri:imageCamera}} style={{ height:'100%' ,width:'100%'}}/>
              
 
                </View>
                :
              imageSource!==null?
                
            
              
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
              <Image source={{uri:imageSource}} style={{ height:'100%' ,width:'100%'}}/>
     

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
  </Animated.View>

  

  <View style={styles.addBtn}>

  {/* <Button  title="Create"  onPress={()=>(navigation.navigate('C',({shape}),SecondLoad()))}/> */}

  <TouchableOpacity onPress={()=>(navigation.navigate('C',({shape ,id:id}),Navigate()))}>

                           <LinearGradient
                           colors={["blue", "skyblue"]}
                            style={styles.appButtonContainer}
                            >

    <Text style={styles.appButtonText1}>Next</Text> 
    </LinearGradient>
  

  </TouchableOpacity>

  </View>

  <View style={styles.addBtn_1}>

  {/* <Button  title="Create"  onPress={()=>(navigation.navigate('C',({shape}),SecondLoad()))}/> */}

  <TouchableOpacity onPress={()=>(navigation.navigate('EditShape',({shape ,id:id})))}>

                           <LinearGradient
                           colors={["skyblue", "blue"]}
                            style={styles.appButtonContainer}
                            >

    <Text style={styles.appButtonText1}>Back</Text> 
    </LinearGradient>
  

  </TouchableOpacity>

  </View>

  
       <View style={styles.addBtn_2}>
      <Text style={styles.appButtonText2}>Tilt shape to resize it </Text>
      </View>
  
  </View>
 
  )

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#87CEFA',
    

  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
 
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

  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    zIndex: 1,
    height:100,
   
    
  },
  addBtn_1: {
    position: 'absolute',
    left: 15,
    bottom: 10,
    zIndex: 1,
    height:100,
   
    
  },
  addBtn_2: {
    position: 'absolute',
   top:100,
    
    
    zIndex: 1,
    height:100,
    
   
    
  },

  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    
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

  appButtonText2: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    width:200,
    

  },
  

});

export default ResizeShape;



// const getItemList=async()=>{

//   try {

//     var output = await AsyncStorage.getItem('Edit');

//     const ji = JSON.parse(output)
//     output.push(color)

    


    
  
//   } catch (err) {
//     console.log(err);
//   }
