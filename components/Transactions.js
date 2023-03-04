import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'; 
const Send = () => {
  return (
   <TouchableOpacity>
     <View style={styles.container}>
        <View style={styles.icon}>
        <AntDesign name="arrowup" size={30} color="black"  />
        </View>
      <Text style={styles.Text}>Send</Text>
    </View>
   </TouchableOpacity>
  )
}
export default Send


export const Recieve = () => {
    return (  
 <TouchableOpacity>
       <View style={styles.container}>
        <View style={styles.icon}>
        <AntDesign name="arrowdown" size={30} color="black"  />
        </View>
      <Text style={styles.Text}>Recieve</Text>
    </View>
 </TouchableOpacity>
    )
  }
export const Buy = () => {
    return (
     <TouchableOpacity>
        <View style={styles.container}>
        <View style={styles.icon}>
        <MaterialCommunityIcons name="purse" size={24} color="black" />
        </View>
      <Text style={styles.Text}>Buy</Text>
    </View>
     </TouchableOpacity>
    )
}
export const Swap = () => {
    return (
      <TouchableOpacity>
         <View style={styles.container}>
        <View style={styles.icon}>
        <Ionicons name="swap-horizontal" size={24} color="black" />
        </View>
      <Text style={styles.Text}>Swap</Text>
    </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    icon:{
       height:50,
       width:50,
       borderRadius:25,
       backgroundColor:'#9BC1F2',
       alignItems:'center',
       justifyContent:'center'
    },
    Text:{
      paddingTop:5,
      color:'white'
    }
})