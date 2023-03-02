import React from "react";
import { View,Text } from "react-native";
import Send, { Buy, Recieve, Swap } from "../components/Transactions";



export default function Browser() {
  return (
    <View>
        <Text>hell</Text>
        <Send />
        <Recieve />
        <Buy/>
        <Swap/>
    </View>
  );
}