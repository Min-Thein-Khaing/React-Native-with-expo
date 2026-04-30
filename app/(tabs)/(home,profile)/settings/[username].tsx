import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const UserName = () => {
  const { username } = useLocalSearchParams()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'SpaceMono', marginVertical: 5, color: "blue" }}>UserName {username}</Text>
    </View>
  )
}

export default UserName