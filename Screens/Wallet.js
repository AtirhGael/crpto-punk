import { View, Text,StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import { Feather,AntDesign } from '@expo/vector-icons';
import Send, { Buy, Recieve, Swap } from '../components/Transactions';
import Token from '../components/Token';
import Nfts from '../components/Nfts';

const Wallet = () => {
    const [active, setActive] = useState('active')
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.icons}>
                <Feather name="bell" size={24} color="white" />
                <AntDesign name="linechart" size={24} color="white" />
            </View>
            <View style={styles.accInfo}>
                <Text style={styles.text}>$0.000</Text>
                <Text style={{color:'white'}}> Main Wallet 1 </Text>
            </View>
            <View style={styles.transactions}>
                <Send/>
                <Recieve/>
                <Buy/>
                <Swap/>
            </View>
        </View>
       <SafeAreaView>
       <View style={styles.buttom}>
            <View style={styles.row}>
            <TouchableOpacity   onPress={()=>setActive('active')}>
                <Text style={{color:'white'}}>Tokens</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>setActive('unactive')}
            >
                <Text style={{color:'white'}}>NFTs</Text>
            </TouchableOpacity>
            </View>
       
            {active === "active" && <Token />}
            {active === "unactive" && <Nfts />}
      

        </View>
       </SafeAreaView>
      
    </View>
  )
}

export default Wallet

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#212125'
    },
    top:{
        marginTop:30,
        marginLeft:5,
        marginRight:5,
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-between'
    },
    transactions:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        padding:4,
    },
    text:{
        fontSize:40,
        color:'white'
    },
    icons:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        marginLeft:5,
        marginRight:5,
        paddingTop:10,
        paddingBottom:10,
    },
    accInfo:{
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        justifyContent:'center'
    },
    buttom:{
        display:'flex',
        justifyContent:'space-between',
        paddingTop:15,
       
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:30,
        marginRight:30,
        paddingTop:20,
    },
  
})