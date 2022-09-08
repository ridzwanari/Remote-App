import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from "react-native"

const Editicon = ({ antIconName, size, color, style, onPress }) => {
    return(
        <View>
           
                <Image source={require('../Image/pencil.png')}  onPress={onPress} 
                 resizeMode='contain'/>
         
        
        
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

    export default Editicon