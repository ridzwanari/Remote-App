import React, { useRef, useEffect, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, useWindowDimensions, Text, navigation, Image, Alret, Button, FlatList,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreatedView from "./CreatedView";
import { useNotes } from '../contexts/NoteProvider';
import { useFinal } from "../contexts/FinalProvider";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";



const Created = ({ route, props, navigation }) => {

  // const Created = (props,route) =>{


  // const [note, setNote] = useState(props.route.params.note);

  const Yscroll = React.useRef(new Animated.Value(0)).current;



  const { notes, setNotes, findNotes } = useNotes();

  const { nick, setNick, findFinal } = useFinal();


  const [output, setOutput] = useState();


  const [nickname, setNickname] = useState();
  const [color, setColor] = useState('');
  const [Sscale, setScale] = useState();


  // const {color} = route.params

  const [storage, setStorage] = useState([])


  const [title, setTittle] = useState();


  const [imageSource, setImageSource] = useState()
  const [imageCamera, setImageCamera] = useState()
  const [id, setId] = useState();




  useEffect((result) => {

    // console.log("Created id "+route.params.id)
    setId(route.params.id)


    changeShape(shape)


    SecondLoad()

    console.log("storagedasfsfs" + JSON.stringify(storage))



    // console.log("Scale :"+JSON.stringify(scale))
    // final()

    // console.log("Color"+JSON.stringify(storage))




  },

    []);




  const SecondLoad = async () => {

    try {
      const result = await AsyncStorage.getItem('hello4')

      console.log('resultzz' + result)

      var temp = []

      if (result !== null) {





        data = JSON.parse(result)

        temp = data

        console.log("Result result: " + JSON.stringify(data))


        console.log("temp" + JSON.stringify(temp))
        setStorage(temp)
        setScale(data.scale)
        setColor(data.color)
        setImageCamera(data.imageCamera)
        setImageSource(data.imageSource)


        //  setScale(scale)
        //  scale.setValue(data.scale);
      }

      else {

        console.log('Kosong ca')

      }

    } catch (error) {
      // Error retrieving data
    }


    // console.log(JSON.stringify(result.color))


  }



  const { shape } = route.params


  const [showSquare, setshowSquare] = useState();
  const [showCircle, setshowCircle] = useState();
  const [showRectangle, setshowRectangle] = useState();
  const [showOval, setshowOval] = useState();
  const [showTriangle, setshowTriangle] = useState();



  const changeShape = (shape) => {
    setshowSquare(shape == 'Square')
    setshowCircle(shape == 'Circle')
    setshowRectangle(shape == 'Rectangle')
    setshowOval(shape == 'Oval')
    setshowTriangle(shape == 'Triangle')
  }


  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const scale = useRef(new Animated.Value(1)).current;
  //  console.log("Scale : "+ JSON.stringify(scale))

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

          scale.setValue(1 + screenMovedPercents * 1);


        }
      },



    })
  ).current;





  const openNote = CreatedView => {

    navigation.navigate('Cs', { CreatedView })
  }

  const DraggableView = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ]),

    })
  }


  const renderItem = ({ item, value }) => {

    // console.log("itemss"+JSON.stringify(item))

    return (

      


      <Animated.View

      


        {...panResponder.panHandlers}

        source={IMAGE_URI}
        style={{

          width: 300,
          margin: 30,
          easing: "ease-in-out",
          duration: 30,

          transform: [
            // or pan.getTranslateTransform()
            { translateX: pan.x },
            { translateY: pan.y },
          ]

        }} >


        {/* <Text style={styles.titleText}>{item.value.shape}</Text> */}
        <View
        

          style={
            item.value.shape == 'Square'
              ? [styles.squareShapeView, { backgroundColor: item.value.color }, { transform: [{ scale: item.value.scale }] }]
              :
              item.value.shape == 'Circle'
                ? [styles.circleShapeView, { backgroundColor: item.value.color }, { transform: [{ scale: item.value.scale }] }]
                : item.value.shape == 'Rectangle'
                  ? [styles.rectangleShapeView, { backgroundColor: item.value.color }, { transform: [{ scale: item.value.scale }] }]
                  : item.value.shape == 'Oval'
                    ? [styles.ovalShapeView, { backgroundColor: item.value.color }, { transform: [{ scale: item.value.scale }] }]
                    : item.value.shape == 'Triangle'
                      ? [styles.triangleShapeView, { borderBottomColor: item.value.color }, { transform: [{ scale: item.value.scale }] }]
                      : ''
          }
        >
          


          <Image source={{ uri: item.value.imageCamera }} style={{ height: '100%', width: '100%' }} />


          <Image source={{ uri: item.value.imageSource }} style={{ height: '100%', width: '100%' }} />


        </View>
      </Animated.View>



    )

  }






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




      <Animated.FlatList

        data={storage}




        keyExtractor={item => item.key}


        contentContainerStyle={{



          flex: 1,
          width: '100%',
       




        }}



        renderItem={renderItem}

      />





      {/*           
        


        
        // extraData={} */}






      {/* 
      
      
          {data.color!=false?
            
            <View
            
             style={
             showSquare
             ? [styles.squareShapeView,{ backgroundColor:data.color}]
             :showCircle
             ? [styles.circleShapeView ,{ backgroundColor:data.color}]
             :showRectangle
             ? [styles.rectangleShapeView,{ backgroundColor:data.color}]
             :showOval
             ? [styles.ovalShapeView,{ backgroundColor:data.color}]
             :showTriangle
             ? [styles.triangleShapeView,{ borderBottomColor:data.color}]
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
              <Image source={{uri:data.imageCamera}} style={{ height:'100%' ,width:'100%'}}/>
             

               </View>
               :
             data.imageSource!==null?
               
           
             
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
             <Image source={{uri:data.imageSource}} style={{ height:'100%' ,width:'100%'}}/>
    

              </View>

             : <View
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
       */}

<View style={styles.addBtn_1}>



<TouchableOpacity onPress={()=>(navigation.navigate('S',({shape ,id:id})))}>

                         <LinearGradient
                         colors={["skyblue", "blue"]}
                          style={styles.appButtonContainer}
                          >

  <Text style={styles.appButtonText1}>Back</Text> 
  </LinearGradient>


</TouchableOpacity>

</View>

<View style={styles.addBtn}>

{/* <Button  title="Create"  onPress={()=>(navigation.navigate('C',({shape}),SecondLoad()))}/> */}

<TouchableOpacity onPress={()=>navigation.navigate('NoteScreen')}>

                         <LinearGradient
                         colors={["skyblue", "blue"]}
                          style={styles.appButtonContainer}
                          >

  <Text style={styles.appButtonText1}>Homepage</Text> 
  </LinearGradient>


</TouchableOpacity>

</View>

    

      <Button title="Refresh" style={styles.addBtn} onPress={() =>(SecondLoad()) } />



    </View>

  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'lightskyblue'
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
    borderWidth: 10


  },
  rectangleShapeView: {
    width: 120 * 2,
    height: 120,
    borderRadius: 2,
    borderColor: 'black',


    borderWidth: 10

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
    borderWidth: 10,
    justifyContent: 'center'
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


  
});

export default Created