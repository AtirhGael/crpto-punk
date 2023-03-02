// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs/Tabs';
import { NativeBaseProvider } from 'native-base';
import CoinDetails from './Screens/CoinDetails';
import Wallet from './Screens/Wallet';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator
      screenOptions={
      {
        headerShown:false,
        headerStyle:{
          backgroundColor:'#1f1f1f'
        }
      }
      }
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="coinDetails" component={CoinDetails} />
        <Stack.Screen name="wallet" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
