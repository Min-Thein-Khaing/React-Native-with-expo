import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView , useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomText from '@/components/custom-text'
import { Image } from 'expo-image'

const Cart = () => {
    //instead SafeAreaView we can use useSafeAreaInsets 
    // const insert = useSafeAreaInsets()
  return (
    <SafeAreaView >
      <ScrollView>
      <CustomText >cart</CustomText>
      <CustomText style={{fontFamily:"PlaywriteNZGuides-Regular"}} >Welcome to Thailand, Myanamar</CustomText>
      <Image source={{uri:"screen_shot"}} style={{width:200,height:200}} />
      <Image source={require("@/assets/images/react-logo.png")} style={{width:200,height:200}} />
      <Image contentFit='cover' source={{uri:"https://reqres.in/img/faces/7-image.jpg"}} style={{width:200,height:400 ,backgroundColor:'green'}} />
      </ScrollView>
    </SafeAreaView >
  )
}

export default Cart

const styles = StyleSheet.create({})
//https://reqres.in/img/faces/7-image.jpg