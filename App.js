import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import  {NavigationContainer, TabActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Intro from './screens/Intro';
import NoteScreen from './screens/NoteScreen';
import NoteDetail from './screens/NoteDetail'
import Canvas from './screens/Canvas';




import FinalProvider from './contexts/FinalProvider';
import NoteProvider from './contexts/NoteProvider';
import Create from './screens/Create';
import EditShape from './screens/EditShape';
import ResizeShape from './screens/ResizeShape';
import Created from './screens/Created';
import CreatedView from './screens/CreatedView';
import Choose from './screens/Choose';
import Splash from './screens/Splash';
import NoteInputModal from './screens/NoteInputModal';
import NewScreen from './screens/NewScreen';


const Stack = createNativeStackNavigator();


function App({navigation}) {
  const [user, setUser] = useState({});
  // const [canvas, setCanvas] = useState([]);

  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };
  

  // const findCanvas = async (item) => {
    
  //   const result =await AsyncStorage.getItem('canvas');
  //   if (result === null) setCanvas(JSON.parse(result));
  //   console.log ("canvas/,/,/App"+JSON.stringify (canvas))
   
  // };


 
  useEffect(() => {
    // findCanvas()
    findUser()
 
    SplashScreen.hide()
    // setTimeout(() => SplashScreen.hide(),);
  }, []);

 



const RenderNoteScreen = props => <NoteScreen {...props} user={user}  />;
// const RenderCanvas = props => <Canvas {...props} canvas={canvas} />;


if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;


const Tab = createBottomTabNavigator();

// //Screen names
// const NoteScreen = "NoteScreen";
// const Canvas = "Canvas";
// const EditShape = "EditShape";




 return (
  
   <NavigationContainer>
  <FinalProvider>
  <NoteProvider>

 
        <Stack.Navigator
          screenOptions={{ headerTitle: '', headerTransparent: true }}
          >

            
          
          <Stack.Screen component={Splash} name='J'/>
          <Stack.Screen component={RenderNoteScreen} name='NoteScreen'/>
          <Stack.Screen component={NoteInputModal} name='Input'/>
          <Stack.Screen component={Choose} name='Choose' />
          <Stack.Screen component={NoteDetail} name='NoteDetail' />
          <Stack.Screen component={Canvas} name='Canvas'/>
          <Stack.Screen component={Create} name='Create'/>
          <Stack.Screen component={EditShape} name='EditShape'/>
          <Stack.Screen component={ResizeShape} name='S'/>
          <Stack.Screen component={Created} name='C'/>
          <Stack.Screen component={CreatedView} name='Cs'/>
          <Stack.Screen component={NewScreen} name='Nw'/>
        

        </Stack.Navigator>
        </NoteProvider>
        
        </FinalProvider>
{/*          
        <Tab.Navigator
        initialRouteName={NoteScreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === NoteScreen) {
              iconName = focused ? 'NoteScreen' : 'home-outline';

            } else if (rn === Canvas) {
              iconName = focused ? 'Canvas' : 'list-outline';

            } else if (rn === EditShape) {
              iconName = focused ? 'EditShape' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={"NoteScreen"} component={RenderNoteScreen} />
        <Tab.Screen name={"Canvas"} component={Canvas} />
        <Tab.Screen name={"EditShape"} component={EditShape} />

      </Tab.Navigator> */}
      
       
      
    </NavigationContainer>


  )
  
 
 }




export default App