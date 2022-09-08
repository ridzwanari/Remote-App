
import React, { useEffect, useState,useRef} from 'react';
import LottieView from "lottie-react-native";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  navigation 

} from 'react-native';

import NoteScreen from './NoteScreen';
import Note from './Note';

const { height, width } = Dimensions.get('screen')

const Splash =props => {

  const ref = useRef(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);




  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1000);
   
  }, []);


  useEffect(() => {
    if (authLoaded && animationLoaded) {
      props.navigation.replace('NoteScreen');
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  const onAnimationFinish = () => { setAnimationLoaded(true);};

    return(

     
          <LottieView
          ref={animation => {
            ref.current = animation;
        }}
          source={require('../android/app/assets/splash_4.json')}
        
          autoPlay
          loop={false}
          style={{
            // width: width ,
            // height: height,
            // marginLeft: - 5
          }}
       
         
          onAnimationFinish ={onAnimationFinish}
          
          />
        
    );
};


export default Splash;

