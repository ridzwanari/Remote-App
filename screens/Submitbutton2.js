import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from "react-native"

const Submitbutton2 = ({ antIconName, size, color, style, onPress }) => {
    return(
        <View>
            
                <Image source={require('../Image/remove.png')}/>
          
        
        
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

    export default Submitbutton2