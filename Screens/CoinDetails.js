import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const CoinDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()
  return (
    <View style={styles.container}>
     <View style={styles.top1} >
        <View style={styles.left}>
        <AntDesign name="arrowleft" size={24} color="#fff" 
        onPress={() => navigation.goBack()}
        />
          <Text style={{color:'#fff',fontSize:20,}}>{ route.params.name }</Text>
        </View>
        <View style={styles.right}>
        <FontAwesome name="shopping-bag" size={24} color="white"/>
        <AntDesign name="linechart" size={24} color="white" />
        </View>
     </View>
     <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,paddingTop:10,alignItems:'center', paddingTop:10,}}>
      <Text style={{color:'#fff', fontSize:17}}> coin</Text>
      <View style={{display:'flex', flexDirection:'row', gap:5, }} >
        <Text style={{color:'#fff'}}> {route.params.amount} </Text>
        <Text style={{color:'red'}} > {route.params.percent} </Text>
      </View>
     </View>
     <View style={styles.text_image}>
     <Image
                source={route.params.Image}
                resizeMethod='resize'
                style={{
                    height:60,
                    width:60,
                    borderRadius:30,
                    paddingLeft:10,
                }}
                />
      <Text style={{color:'#fff',fontSize:16,}}> {route.params.name}</Text>
     </View>
     <View style={styles.transactions} >
      {route.params.send}
      {route.params.recieve}
      {route.params.buy}
      {route.params.stake}
     </View>
    </View>
  )
}

export default CoinDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#212125',
  },
  top1:{
    marginTop:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  left:{
    display:'flex',
    flexDirection:'row',
    padding:5,
    marginLeft:10,
    paddingTop:10,
    gap:20,

  },
  right:{
    display:'flex',
    flexDirection:'row',
    padding:5,
    paddingTop:10,
    marginRight:10,
    gap:20,
    
  },
  text_image:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:20,

  },
  transactions:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:25,
    paddingTop:30,
  }
})