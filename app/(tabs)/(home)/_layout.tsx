import { Stack } from "expo-router"

const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="detail" />
    </Stack>
  )
}

export default HomeLayout
