import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { Staking } from '../components/data';
import { useNavigation } from '@react-navigation/native';

const MoreCoins = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container} >
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={30} color="#fff" 
        onPress={() => navigation.goBack()}
        />
        <Text style={{color:'#fff', fontSize:23,}}> Staking </Text>
      </View>
      <FlatList 
      data={Staking}
      renderItem={({item})=>(
        <TouchableOpacity
        onPress={() => navigation.navigate('coinDetails',item)}
        >
        <View style={styles.container1}>
            <View style={styles.row} >
                <View style={styles.imgMidle} >
                <Image
                source={item.Image}
                resizeMethod='resize'
                style={{
                    height:40,
                    width:40,
                    borderRadius:20,
                    paddingLeft:10,
                }}
                />
                <View style={styles.midle} >
                    <Text style={{color:'white'}}> {item.name}</Text>
                    <Text style={{color:'white'}}> {item.fname}</Text>
                </View>
                </View>
                <Text style={{color:'white'}}> {item.apr} <Text style={{color:'red'}} > {item.percent} </Text></Text>
                {/* for future updates i will put signals heere */}
            </View>
        </View>
    </TouchableOpacity> 
      )}
      />
    </View>
  )
}

export default MoreCoins

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#212125',
        flex:1,
    },
    header:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        paddingLeft:10,
        position:'relative',
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    imgMidle:{
      display:'flex',
      flexDirection:'row',
      padding:10,
    },
    midle:{
      marginLeft:10,
    }
})