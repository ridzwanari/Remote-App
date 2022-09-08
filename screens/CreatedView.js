import React, { useRef,useEffect,useState } from "react";
import { Animated, View, StyleSheet, PanResponder, useWindowDimensions,Text ,navigation,Image, Alret,Button,FlatList} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";




const CreatedView = ({navigationRef,route,navigation,item}) =>{

 
    const [nickname, setNickname] = useState();
    const[color,setColor]=useState('');
    const[Sscale,setScale]=useState();

    // const {color} = route.params

    const [storage,setStorage]=useState([])
    
    
    const [title,setTittle]=useState();
    
    const [imageSource, setImageSource] = useState()
    const [imageCamera,setImageCamera] = useState()
    
    const data={color,shape,imageCamera,imageSource}

    const s={scale}


    
    
    useEffect((result) => {
       
      // console.log({shape})
      
        changeShape(shape)
      
        SecondLoad()

        // final()

      
      
    
        
    
        // console.log("Color"+{result})
      
       
      }, 

      []);

     
    
        
    const SecondLoad = async() => {
      
   
    
   

  try {
    const result = await AsyncStorage.getItem('hal')
    if(result!==null){

    const value = JSON.parse(result)

    setStorage(result)
    console.log('dsadsad'+ (storage))


     temp=value
    
     if(value.length<10)
     {
       temp.push({"key":[value.length] ,"value":bola})
       
   
       setColor(color)
       setImageCamera(imageCamera) 
       setImageSource(imageSource) 
     }


   
     }
     
     else {
 
      console.log('Createdsss')
       
     }
  
} catch (error) {
  // Error retrieving data
}
  

 
    
     
     
        // console.log(JSON.stringify(result.color))
        
     
       }
    
    
    
    
          
    const { shape } = route.params

    const [showSquare,setshowSquare] = useState();
    const [showCircle,setshowCircle] = useState();
    const [showRectangle,setshowRectangle] =useState();
    const [showOval,setshowOval] =useState();
    const [showTriangle,setshowTriangle] = useState();

    
    const changeShape = (shape)=>{
      setshowSquare(shape == 'Square')
      setshowCircle(shape == 'Circle')
      setshowRectangle(shape == 'Rectangle')
      setshowOval(shape == 'Oval')
      setshowTriangle(shape == 'Triangle')
    }

    


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

       

      }
    },

   
   
  })
).current;


    

    return(

        <View  style={styles.container}>
            
    
     
    <Animated.View

    
    source={IMAGE_URI}
    style={{
      
      height: 100,
      
     alignItems:'center',
      width: '50%',
      borderRadius: 10,
      transform: [
        // or pan.getTranslateTransform()
        { translateX: 0 },
        { translateY: 0 },
        { scale },

      
      ],
     
    }}
    >
    
        
         

</Animated.View>
          
        

             


{/* 
             <View style={styles.list}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30}}>
          Array List
        </Text>

        {storage.map((item, index) => {
          return (
            <Text style={{marginVertical: 10}} key={index}>
              {item}
            </Text>
          );
        })}
      </View> */}

        </View>


    )
}

const styles = StyleSheet.create({


  addBtn: {
    position: 'absolute',
    right: 15,
    bottom: 50,
    zIndex: 1,
  },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
    
})





export default CreatedView