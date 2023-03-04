import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React from 'react'
import { data2, data3 } from '../components/data'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';




const Discover = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
     <View style={styles.header} >
       <Text style={{fontSize:15,color:'#fff'}}> Discover </Text> 
       </View>
       <ScrollView style={{flex:1}}>
       <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',paddingTop:15,marginLeft:5,marginRight:5}} >
          <Text  style={{color:'white'}}> Staking </Text>
          <AntDesign name="arrowright" size={24} color="white" 
          onPress={()=> navigation.navigate('morecoins')}
          />
       </View>
       <View>
       <FlatList
          data={data2}
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
          {/* second FlatList */}
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',paddingTop:15,marginLeft:5,marginRight:5}} >
          <Text  style={{color:'white'}}> DeFI Tokens </Text>
          <AntDesign name="arrowright" size={24} color="white" onPress={()=> navigation.navigate('morecoins')} />
       </View>
       <View>
       <FlatList
          data={data2}
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
                          <Text style={{color:'white'}}> {item.fname}</Text>
                      </View>
                      </View>
                      <View style={{alignItems:'center', marginRight:5,}}>
                      <Text style={{color:'white'}}> {item.balance}</Text>
                      <Text style={{color:'gray'}} > {item.percent} </Text>
                      </View>
                      {/* for future updates i will put signals heere */}
                  </View>
              </View>
          </TouchableOpacity>     
           )}
          />
       </View>

          {/* third FlatList */}

          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',paddingTop:15,marginLeft:5,marginRight:5}} >
          <Text  style={{color:'white'}}> Lending/Borrowing </Text>
          <AntDesign name="arrowright" size={24} color="white"onPress={()=> navigation.navigate('morecoins')} />
       </View>
       <View>
       <FlatList
          data={data3}
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
                          <Text style={{color:'white'}}> {item.fname}</Text>
                      </View>
                      </View>
                      <View style={{alignItems:'center', marginRight:5,}}>
                      <Text style={{color:'white'}}> {item.balance}</Text>
                      <Text style={{color:'gray'}} > {item.percent} </Text>
                      </View>
                      {/* for future updates i will put signals heere */}
                  </View>
              </View>
          </TouchableOpacity>     
           )}
          />

<View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',paddingTop:15,marginLeft:5,marginRight:5}} >
          <Text  style={{color:'white'}}> DeFI Tokens </Text>
          <AntDesign name="arrowright" size={24} color="white" />
       </View>
       <View>
       <FlatList
          data={data2}
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
                          <Text style={{color:'white'}}> {item.fname}</Text>
                      </View>
                      </View>
                      <View style={{alignItems:'center', marginRight:5,}}>
                      <Text style={{color:'white'}}> {item.balance}</Text>
                      <Text style={{color:'gray'}} > {item.percent} </Text>
                      </View>
                      {/* for future updates i will put signals heere */}
                  </View>
              </View>
          </TouchableOpacity>     
           )}
          />
       </View>
       </View>
          </ScrollView>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#212125',
    flex:1,
    
  },
  header:{
    backgroundColor:"black",
    position:'relative',
    height:90,
    width:'100%',
    justifyContent:'center',
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