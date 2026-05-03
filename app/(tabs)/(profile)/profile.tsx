import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
const Profile = () => {
  const [show, setShow] = useState<{
    name: string,
    age: number
  } | null>(null)

  //use secure store
  // const getName = async () => {
  //   const name = await SecureStore.getItemAsync("name")
  //     setShow(name || "not found")
  // }

  const getFormAsync = async() => {
    const name = await AsyncStorage.getItem("form");
    if(name){
      const form = JSON.parse(name)
      setShow(form)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link
        style={{ marginVertical: 5 }}
        href="/settings/zaw zaw"
      >
        <Text style={{ fontFamily: 'SpaceMono', color: "blue" }}>Go to setting</Text>
      </Link>
      <View>
        <Text>profile name- {show?.name}</Text>
        <Text>profile age- {show?.age}</Text>
      </View>
      <Button title='Get Data' onPress={getFormAsync} /> {/*use async store*/}
      {/* <Button title='Get Data' onPress={getName} /> use secure store */}
    </View>
  )
}

export default Profile
