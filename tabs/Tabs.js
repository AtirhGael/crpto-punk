import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Browser from '../Screens/Browser';
import Discover from '../Screens/Discover';
import Basic from '../Screens/Settings';
import Wallet from '../Screens/Wallet';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarStyle: { position: 'absolute',height:80,
        backgroundColor:'#1E1E1E'
     },
    }}
    >
      <Tab.Screen name="wallet" component={Wallet} />
      <Tab.Screen name="discover" component={Discover} />
      <Tab.Screen name="browser" component={Browser} />
      <Tab.Screen name="setting" component={Basic} />
    </Tab.Navigator>
  );
}

export default Tabs;
// const styles = StyleSheet.create({})