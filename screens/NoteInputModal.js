import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

import Submitbutton from './Submitbutton'; 
import Submitbutton2 from './Submitbutton2';
import Canvas from './Canvas';
import { useNavigation } from '@react-navigation/native';




const NoteInputModal = ({ visible, onClose, onSubmit,note,isEdit,onPress}) => {
  const [title, setTitle] = useState('');
  
  const [desc, setDesc] = useState('');
  const handleModalClose = () => {
    Keyboard.dismiss();
  };


  useEffect(() => {
    if (isEdit) { 
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'desc') setDesc(text);
  };
  const handleSubmit = () => {
    if (!title.trim() && !desc.trim()) return onClose();

    if (isEdit) { 
      onSubmit(title, desc, Date.now());
    } else {
      onSubmit(title, desc);
      setTitle('');
      setDesc('');
    }
   
    onClose();

  
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle('');
      setDesc('');
    }
    onClose();
  }

const navigation = useNavigation(); 
  const hello =()=> {

    navigation.navigate('Nw')

  }
  return (
    
    
  
      <Modal visible={visible} animationType='fade'>
            <Text style={styles.addText}>Please enter either Title or Description</Text>
        <View  style={styles.container}>                  
<LottieView
        
        source={require('../android/app/assets/waves_2.json')}
        resizeMode='center'
        autoPlay
        loop={true}
        style={{
          
          
          bottom:200
         
        }}
     
       
        
        />
 
              <TextInput
            
                value={title}
                onChangeText={text => handleOnChangeText(text, 'title')}
                placeholder='*Title'
            
                style={[styles.input, styles.title]}
              />
              <TextInput
                value={desc}
              
                placeholder='*Description'
                style={[styles.input, styles.desc]}
                onChangeText={text => handleOnChangeText(text, 'desc')}
              />
                <View style={styles.appButtonContainer}>

                <View style={{height:30}}></View>
        
                <TouchableOpacity  
                 onPress={()=>(navigation.navigate('Nw'),handleSubmit())}
                 style={{}}   
              
                
                >
              
                <LinearGradient
                colors={["blue", "white"]}
                style={styles.appButtonContainer}
                >
                <Text style={styles.appButtonText}>Continue</Text>

                </LinearGradient>
                </TouchableOpacity>
                </View>
                <Text style={{lineHeight:20}}></Text>
            
            <View style={styles.appButtonContainer}>
            <TouchableOpacity  onPress={closeModal} style={{}}>

            <LinearGradient
             colors={["white", "blue"]}
             style={styles.appButtonContainer}
             >
            {title.trim() || desc.trim() ? (
              <Text style={styles.appButtonText}>Cancel</Text>
              
            ) : null}
            </LinearGradient>
            </TouchableOpacity>   
            </View>
            
        
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
        
       
      </Modal>
      
 
    
  );
};

const styles = StyleSheet.create({




  container: {
   
    flex:1,
    top:200,
   
    paddingHorizontal: 20,
    paddingTop: 15,
    // backgroundColor:'#FFE4B5',
    
  },
  
  addText: {
    position: 'absolute',
    fontSize:15,
    fontWeight:'bold',
    top: 50,
    zIndex: 1,
    alignSelf:'center',
    color:'blue'
  },
  input: {
    borderBottomWidth: 2,
    fontSize: 20,
  
  },
  title: {
    height: 50,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  desc: {
    height: 50,
    fontWeight: 'bold',
  
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
   
  },
  appButtonContainer: {
  
    borderRadius: 30,
    
   
  
  },
  
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf:'center',
    textTransform: "uppercase",
    borderRadius:20,
   
    
  }
});

export default NoteInputModal;