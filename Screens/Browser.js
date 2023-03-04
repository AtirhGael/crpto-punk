import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native';




const Browser = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
        placeholder="Search or enter website url"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="magnify"
        backgroundColor='#41494C'
        style={{
          borderRadius:30,
          marginLeft:15,
          marginRight:15,

        }}
      />
      </View>
      <ScrollView>
        <View>
        <View style={styles.body} >
          <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#fff'}} > History </Text>
            <Text  > arroe </Text>
          </View>
        </View>
        <TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row',marginLeft:10,marginRight:10, paddingTop:14,}}>
          <Image
            source={require('../images/bnb.png')}
            resizeMethod='resize'
            style={{
              height:50,
              width:50,
              borderRadius:25,
            }}
          />
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>   You can use AWS managed policies as a starting point for  </Text>
            <Text style={{color:'#fff'}}>   You can use AWS managed  </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginLeft:10,marginRight:10, paddingTop:14,}}>
          <Image
            source={require('../images/bnb.png')}
            resizeMethod='resize'
            style={{
              height:50,
              width:50,
              borderRadius:25,
            }}
          />
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>   You can use AWS managed policies as a starting point for  </Text>
            <Text style={{color:'#fff'}}>   You can use AWS managed  </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginLeft:10,marginRight:10, paddingTop:14,}}>
          <Image
            source={require('../images/bnb.png')}
            resizeMethod='resize'
            style={{
              height:50,
              width:50,
              borderRadius:25,
            }}
          />
          <View style={{justifyContent:'center'}}>
            <Text style={{color:'#fff'}}>   You can use AWS managedpolici es as a starting point for  </Text>
            <Text style={{color:'#fff'}}>   You can use AWS managed  </Text>
          </View>
        </View>
        </TouchableOpacity>
        </View>

        {/* second?\ */}
        
      </ScrollView>

    </View>
  )
}

export default Browser

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#212125',
    flex:1,
  },
  header:{
    marginTop:30,
    position:'relative',
  },
  body:{
    marginLeft:10,
    marginRight:10,
    paddingTop:15,
  }
})