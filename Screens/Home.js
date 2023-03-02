import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

const Home = () => {
  return (
    <NativeBaseProvider>
        <Box> hello world</Box>
    </NativeBaseProvider>
  )
}

export default Home

const styles = StyleSheet.create({})