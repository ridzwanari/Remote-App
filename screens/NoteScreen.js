import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
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
  Button

} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';


import SearchBar from './Searchbar';
import Insertbutton from './Insertbutton';
import NoteInputModal from './NoteInputModal';
import Submitbutton from "./Submitbutton"
import Note from './Note';
import NoteDetail from './NoteDetail';
import { useNotes } from '../contexts/NoteProvider';
import Intro from '../screens/Intro'
import NotFound from './NotFound';
import Canvas from './Canvas';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import NewScreen from './NewScreen';



const NoteScreen = ({ user,navigation,item }) => {
  const [greet, setGreet] = useState('Evening');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {notes, setNotes, findNotes } = useNotes();
  const [resultNotFound, setResultNotFound] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [canvas, setCanvas] = useState([]);

  const handleModalClose = () => {
    Keyboard.dismiss();
  };


const handleOnSubmit = async (title, desc) => {
  const note = { id: Date.now(), title, desc, time: Date.now() };
  const updatedNotes = [...notes, note];
  setNotes(updatedNotes);
  await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
  

  // var temp = []
  // var valueTemp = {}

  // AsyncStorage.getItem('NN').then((value) => {
  //   if (value != null) {
  //     const result = JSON.parse(value)



  //     if(result.length == 3) {
  //       console.log("LIMIT 3")
  //     }
  //     else 
  //     {
  //       valueTemp = {id:result.length, title:title, desc:desc, time:Date.now()}
  //       result.push(valueTemp)
        
  //       AsyncStorage.setItem('NN', JSON.stringify(result))
  //     }
  //     setNotes(result)
  //     console.log("RESULT " +JSON.stringify(result))
  //   }
  //   else {
  //     temp.push({id:0, title:title, desc:desc, time:Date.now()})
  //     console.log("NO VALUE")
  //     AsyncStorage.setItem('NN', JSON.stringify(temp))
  //     setNotes(temp)

  //   }
  // })


  
};


// const woi=async()=>{

//   var o =[]

//   const result = await AsyncStorage.getItem('notes')
//   if(result!=null){

//      const o = JSON.parse(result)
//      console.log("woi"+JSON.stringify(o))

//       }


// }


// const get =async ()=>{

 
//     const result = await AsyncStorage.getItem('notes');
//     let jon = [];
//     if (result !== null) jon = JSON.parse(result);
//       // We have data!!
      
      
//    setCanvas(jon)

//    for(var i=0;i<jon.length;i++)
//    {

//     console.log(canvas)

//    }
   

   
// };
 


const wddd =()=>{

 
  navigation.navigate('Nw',{item})

}

 


  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return setGreet('Morning');
    if (hrs === 1 || hrs < 17) return setGreet('Afternoon');
    setGreet('Evening');

  
  };
  
  useEffect(() => {
  
    findGreet();
    // AsyncStorage.clear()
    
 
    // console.log("notes ::" +JSON.stringify(notes.length))

  

    // AsyncStorage.getItem('NN').then((value) => {
    //   if (value != null) {
    //     const result = JSON.parse(value)
    //   
    //   }
    // })

   
  
  },[]);

  
 


  
  const openNote = note => {
    navigation.navigate('NoteDetail', { note });
    console.log("note  "+ {note})

  

  };

  const navigateToCanvas =  (item) => {

    // const canvas = { id: id };
    // await AsyncStorage.setItem('canvas', JSON.stringify(canvas));
    // const result =  AsyncStorage.getItem('item');
    // if (result === null) canvas = JSON.parse(result);
    // setCanvas(result)
    // // await AsyncStorage.setCanvas('canvas', JSON.stringify(canvas));
    // console.log ("canvas "+JSON.stringify (item))


    // <Canvas onPress={() => openNote(item)} item={item} />

    console.log("note  "+ JSON.stringify(item))
      navigation.navigate('Canvas', 
    {
      title: item.title,
      desc:  item.desc
    })

  }

  
  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };

  

    
    const deleteNote = async (item) => {
      console.log ("item  "+JSON.stringify (item))

      const result = await AsyncStorage.getItem('notes');
    
      let notes = [];
      if (result !== null) notes = JSON.parse(result);
      console.log("notes  "+JSON.stringify (notes))

      const newNotes = notes.filter(n => n.id !==item.id);
      setNotes(newNotes)
  
      console.log(JSON.stringify (newNotes))

      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
      Alert.alert("Sucessfully Delete")
      

   
    }
     

  const renderHiddenItem = ({item},index)=>(
 

    <View style={styles.rowBack}>
      <TouchableOpacity
            style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
            onPress={() =>openNote(item)}    
        >
     <View>
     <Image source={require('../Image/list.png')}/>
  
     </View>
     
  
   
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
             onPress={() => deleteNote(item)}
             
            
        >
             <View>
     <Image source={require('../Image/delete.png')}  />
  
        </View>

           </TouchableOpacity>
       
        </View>
  
  )
  
    const handleOnSearchInput = async text => {
      setSearchQuery(text);
      if (!text.trim()) {
        setSearchQuery('');
        setResultNotFound(false);
        return await findNotes();
      }
     
      const filteredNotes = notes.filter(note => {
        if (note.title.toLowerCase().includes(text.toLowerCase())||note.desc.toLowerCase().includes(text.toLowerCase()) ) {
          return note;
        }
        
        

      });
  
      if (filteredNotes.length) {
        setNotes([...filteredNotes]);
      } else {
        setResultNotFound(true);
      }
    };
  
    const handleOnClear = async () => {
      setSearchQuery('');
      setResultNotFound(false);
      await findNotes
    };

    let colors = ['#00CED1', '#00BFFF', '#1E90FF'];

   
  

  
  return (
    
    

    <View style={styles.container}>
{/* 
    <TouchableWithoutFeedback onPress={handleModalClose()} >
      <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
    </TouchableWithoutFeedback>  */}

    

      
      
<StatusBar 


 translucent={true}
 backgroundColor="transparent"
 barStyle={'dark-content'}
 




/>


<LottieView
        
        
          source={require('../android/app/assets/ocean.json')}
          autoPlay
          loop={true}
          resizeMode="cover"

 />


          <View style={{padding:30,paddingRight:10}}>
          <Text style={styles.header}>{`Good ${greet}`}</Text>
          <Text style={styles.header}>{`${user.name}`}</Text>
          </View>
     
          {notes.length ? (
            <SearchBar
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              containerStyle={{bottom: 20,padding:20,marginVertical:10 }}
              onClear={{handleOnClear}}
            />
          ) : null}


          
           
           {resultNotFound ? (
            <NotFound />
          ) : (
         <SwipeListView
          leftOpenValue={75}
          rightOpenValue={-75}
          previewRowKey={'1'}
          previewOpenValue={-40}
          previewOpenDelay={1000}
          data={notes}
          renderHiddenItem={renderHiddenItem}
          style={{}}
         
      
        
      
          contentContainerStyle={{justifyContent:'space-evenly'}}

          ItemSeparatorComponent={() => {
            return (
                <View
                    style={{
                        height: 10,
                       

                        
                    }} />
            );
        }}

         keyExtractor={item => item.id} 
        
        
         renderItem={({ item,index}) => {
          return(
            <View style={{ backgroundColor:colors[index%colors.length]}}>
              <View
            
              
              
              >
              
        
          <Note item={item}  onPress={() => (navigation.navigate('Nw',item))}  />
      
          </View>

          </View>

     
        
          )
        
         }}  />

            
          )}
 
       
          {!notes.length ? (
         <View
         
              style={[StyleSheet.absoluteFillObject,styles.emptyHeaderContainer]}>
                     
               <Text style={styles.emptyHeader}>Add Remote</Text>
                      
    
               </View>
               ) : null}
        
       {! notes.length ==3 || notes.length <3 ? (
                <View style={styles.addBtn}>
   
       <TouchableOpacity  
     onPress={() => setModalVisible(true)}

     >
      

     <Insertbutton />


    
     </TouchableOpacity>
    
     </View>  
     
       ):null }

{!  notes.length >3 || notes.length ==3 ? (

<View style={styles.addText}>

  <Text style={styles.header_1}>Limited to 3 note only please delete one from listing to add note item</Text>

  </View>

):null }
         
       <NoteInputModal visible={modalVisible}
        onClose={() => setModalVisible(false)} onSubmit={handleOnSubmit}/>

        
      
        </View>
     
        
  
          )  }
const styles = StyleSheet.create({

  
 

  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'skyblue'
  },

  header_1: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'skyblue',
   

  },
  container: {
    paddingTop:20,
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
    backgroundColor:'skyblue',
    

  
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
    color:'black'
  },

  emptyHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },

  addBtn: {
    position: 'absolute',
    right: 25,
    top: 50,
    zIndex: 1,
  },

  addText: {
    position: 'absolute',
    right: 25,
    bottom: 50,
    zIndex: 1,
  },
  
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  marginTop:40,
  },
  buttonOpen: {
  backgroundColor: "#F194FF",
  },
  buttonClose: {
  backgroundColor: "#2196F3",
  },

  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 100,

   
  },
  
backRightBtn: {
  alignItems: 'center',
  bottom: 0,
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  width: 100,

},
backLeftBtnLeft: {
 

  // borderRadius:50,



},
backRightBtnRight: {
 
  right:0
  // borderRadius:50
},

rowBack: {
  alignItems: 'center',
  backgroundColor: 'skyblue',

  flexDirection: 'row',
  justifyContent: 'space-between',
 

  borderRadius:30,
  height:150,
},
squareShapeView: {
  width: 120,
  height: 120,
 
  borderRadius: 1,
  borderWidth:10

  
},

appButtonContainer: {
  elevation: 8,
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 12,
  
},
modalBG: {
  flex: 1,
  zIndex: -1,

},

});

export default NoteScreen;