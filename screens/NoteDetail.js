
import React,{useState,useEffect}from "react";
import{View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { useNotes } from '../contexts/NoteProvider';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";

import NoteInputModal from "./NoteInputModal";
import Editicon from "./Editicon";

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
  const suffix = hrs >= 12 ? "PM":"AM";
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const monthName = months[date.getMonth()]
    return `${day}-${monthName}-${year} - ${hrs}:${min}${suffix}`;
};
  
const NoteDetail = props => {
  const [note, setNote] = useState(props.route.params.note);
  
  const {setNotes} = useNotes()
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
    
//   useEffect(() => {
   
//     console.log("notes"+JSON.stringify(note))
//  }, []);

  const handleUpdate = async (title, desc, time) => {
    const result = await AsyncStorage.getItem('notes');
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter(n => {
      if (n.id === note.id) {
        n.title = title;
        n.desc = desc;
        n.isUpdated = true;
        n.time = time;

        setNote(n);
      }
      return n;
    });

    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };


  useEffect(() => {
    // console.log ("DATA "+JSON.stringify(note))
    // handleUpdate()
   
     
  }, []);
  
    return(
        <View style={styles.container}>
          <LottieView
        
        source={require('../android/app/assets/fishing.json')}
      
        autoPlay
        resizeMode="centre"
        loop={true}
        style={{
          
          top:100,
          left:50
         
        }}
     
       
        
        />

          

            <Text style={styles.time}>
          {note.isUpdated
            ? `Updated At ${formatDate(note.time)}`
            : `Created At ${formatDate(note.time)}`}
        </Text>
        <View style={styles.layout} >
        <Text style={styles.appButtonText}>Title:{note.title}</Text>
      
        <Text style={styles.appButtonText}>Description:{note.desc}</Text>
        </View>
       
        <NoteInputModal
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose}
        onSubmit={handleUpdate}
        visible={showModal}
      />

<TouchableOpacity   style={styles.addBtn} onPress={openEditModal} >
      <Editicon
     
      />
</TouchableOpacity>
      
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         paddingTop:100,
         backgroundColor:'skyblue'
       
      },
      title: {
        fontSize: 30,
        color:'black',
        fontWeight: 'bold',
      },
      desc: {
        fontSize: 20,
        color:'black',
        opacity: 0.6,
      },
      time: {
        textAlign: 'right',
        fontSize: 15,
        fontWeight:'bold',
        opacity: 0.5,
        color:'black',
        right:20

      },
      btnContainer: {
        position: 'absolute',
        right: 15,
        bottom: 50,
      },
      addBtn: {
        position: 'absolute',
        right: 15,
        bottom: 50,
        zIndex: 1,
      },
      appButtonText: {
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        left:50,
        
        margin:20,
      },

      layout:{

        top:100


      }
})

export default NoteDetail
