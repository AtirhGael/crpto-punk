import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browser from '../Screens/Browser';
import Discover from '../Screens/Discover';
import Basic from '../Screens/Settings';
import Wallet from '../Screens/Wallet';
import { AntDesign } from '@expo/vector-icons';
import { Text, View,StyleSheet,Image } from 'react-native';


const Tab = createBottomTabNavigator();

function Tabs() {

  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: { position: 'absolute',height:80,
        backgroundColor:'#262930',
        style:{
          position:'absolute',
          elevation:0,
        }
     },
    }}
    >
      <Tab.Screen name="wallet" component={Wallet}
      options={{
       tabBarIcon:({ focused })=>{
        return(

          <View focused={focused} style={styles.icon}>
            
           <View style={{
            height:27,
            width:28,
            tintColor: focused ? '#e32f45' : '#748c94'}}>
           <Image 
            source={require('../images/wallet.png')}
            resizedMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused ? '#fff' : '#748c94'
            }}
            />
           </View>
           <Text style={{paddingTop:3, color:'#fff'}}> wallet</Text>
          </View>
         
        )
       }
      }}
      />
      <Tab.Screen name="discover" component={Discover}
      options={{
        tabBarIcon:({ focused })=>{
         return(
 
           <View focused={focused} style={styles.icon}>
             
            <View style={{
             height:27,
             width:28,
             tintColor: focused ? '#e32f45' : '#748c94'}}>
            <Image 
             source={require('../images/discover.png')}
             resizedMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? '#fff' : '#748c94'
             }}
             />
            </View>
            <Text style={{paddingTop:3, color:'#fff'}}> Discover</Text>
           </View>
          
         )
        }
       }}
      />
      <Tab.Screen name="browser" component={Browser}
      options={{
        tabBarIcon:({ focused })=>{
         return(
 
           <View focused={focused} style={styles.icon}>
             
            <View style={{
             height:27,
             width:28,
             tintColor: focused ? '#e32f45' : '#748c94'}}>
            <Image 
             source={require('../images/brouser.png')}
             resizedMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? '#fff' : '#748c94'
             }}
             />
            </View>
            <Text style={{paddingTop:3, color:'#fff'}}> Browser</Text>
           </View>
          
         )
        }
       }}
      />
      <Tab.Screen name="setting" component={Basic}
      options={{
        tabBarIcon:({ focused })=>{
         return(
 
           <View focused={focused} style={styles.icon}>
             
            <View style={{
             height:27,
             width:28,
             tintColor: focused ? '#fff' : '#748c94'}}>
            <Image 
             source={require('../images/setting.png')}
             resizedMode='contain'
             style={{
               width:25,
               height:25,
               tintColor: focused ? '#fff' : '#748c94'
             }}
             />
            </View>
            <Text style={{paddingTop:3, color:'#fff'}}> settings</Text>
           </View>
          
         )
        }
       }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
const styles = StyleSheet.create({
  icon:{
    alignItems:'center',
  },
  
})