import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity} from 'react-native';





const tanvas=()=>{

    navigation.navigate('Canvas')
}



function Choose ({navigation,route}){

    

  return (

    <View style={styles.container}>
        <TouchableOpacity
         style={styles.backLeftBtn}
         onPress={navigation.navigate('C')}
         >
            <Text>
                View Result 
            </Text>

        </TouchableOpacity>

        <TouchableOpacity
        style={styles.backRightBtn}
      
   
        >
            <Text >
                Create Shape 
            </Text>

        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex:1,
        
        backgroundColor:'skyblue',
       
      
  },
  
  backLeftBtn: {
 top:250,
 borderRadius: 20,
 padding: 10,
 elevation: 2,

 backgroundColor:'purple'

   

  
  },
  
backRightBtn: {
 
 left:100,

 top:250,

 borderRadius: 20,
 padding: 10,
 elevation: 2,
 marginTop:40,

 backgroundColor:'green'
},
});

export default Choose;