import { Stack } from "expo-router"

const ProfileLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="profile" />
        <Stack.Screen name="contact-us" />
    </Stack>
  )
}

export default ProfileLayout
