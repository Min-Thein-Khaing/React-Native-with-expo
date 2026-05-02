import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams, useRouter } from 'expo-router'

const Detail = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>detail {params.id}</Text>
      <Link href={"/event"} >Go to event with link</Link>
      <Link href={"/event"} replace>Go to event with link replace</Link>
      <Link href={"/detail?id=2&name=Mg Mg"} push>Go to event with link push</Link>
      <Button title="Go to event with button" onPress={() => router.navigate("/event")} color="blue" />
      <Button title="Go to event with button replace" onPress={() => router.replace("/event")} color="blue" />
      <Button title="Go to event with button push" onPress={() => router.push("/event")} color="blue" />
    </View>
  )
}

export default Detail
