import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from "react-native"

const Insertbutton = ({ antIconName, size, color, style, onPress }) => {
    return(
        <View>
           
                <Image source={require('../Image/plus_2.png')}  onPress={onPress}/>
         
        
        
        </View>
    )
}
const style = StyleSheet.create({

    icon:{
        padding: 15,
        borderRadius: 50,
        elevation: 5,
       
       
    
    }

})

    export default Insertbutton