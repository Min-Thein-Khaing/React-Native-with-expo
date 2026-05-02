import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Event = () => {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Hello Event Page", headerStyle: { backgroundColor: "orange" }, headerTintColor: "white", headerTitleStyle: { fontFamily: "SpaceMono" }, headerRight: () => <Button title="update" /> }} />
            <Text>event</Text>
        </View>
    )
}

export default Event