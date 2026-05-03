import { Stack } from "expo-router"

const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"  options={{ headerShown: true }} />
        <Stack.Screen name="detail" />
        <Stack.Screen name="event" />
    </Stack>
  )
}

export default HomeLayout
