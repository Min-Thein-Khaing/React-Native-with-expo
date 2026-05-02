import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView , useSafeAreaInsets } from 'react-native-safe-area-context'

const Cart = () => {
    //instead SafeAreaView we can use useSafeAreaInsets 
    // const insert = useSafeAreaInsets()
  return (
    <SafeAreaView >
      <Text>cart</Text>
    </SafeAreaView >
  )
}

export default Cart

const styles = StyleSheet.create({})