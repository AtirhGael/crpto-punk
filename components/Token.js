import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'
import {data} from './data'
import { useNavigation } from '@react-navigation/native';


const Token = () => {
    const navigation = useNavigation()
  
  return (
    <FlatList
    data={data}
    renderItem={({item})=>(
        <TouchableOpacity
        onPress={() => navigation.navigate('coinDetails',item)}
        >
        <View style={styles.container}>
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
                    <Text style={{color:'white'}}> {item.amount} <Text style={{color:'red'}} > {item.percent} </Text></Text>
                </View>
                </View>
                <Text style={{color:'white'}}> {item.balance} </Text>
            </View>
        </View>
    </TouchableOpacity>     
  )}
    />
  )
}

export default Token

const styles = StyleSheet.create({

    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    container:{
        marginLeft:10,
        marginRight:10,
        paddingTop:10,
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