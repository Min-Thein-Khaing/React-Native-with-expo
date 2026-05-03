import { CountContextProvider } from '@/hooks/provider/countContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
// Splash Screen ကို ခေတ္တရပ်ထားရန်
SplashScreen.preventAutoHideAsync();
export const unstable_settings = {
  anchor: '(tabs)',
};
export default function RootLayout() {
  const colorScheme = useColorScheme();
  // Font များ Load လုပ်ခြင်း
  const [loaded, error] = useFonts({
    'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'), // <--- ဒီစာကြောင်းကို ထည့်ပါ
    'PlaywriteNZGuides-Regular': require('../assets/fonts/PlaywriteNZGuides-Regular.ttf'), // <--- ဒီစာကြောင်းကို ထည့်ပါ
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  const isLogin = true;
  const isAdmin = false;
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CountContextProvider>
        <Stack>
          {/* <Stack.Screen name="index" /> */}

          {/* <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} /> */}


          {/* testing protect route  */}
          <Stack.Protected guard={!isLogin}>
            <Stack.Screen name="login" />
          </Stack.Protected>

          <Stack.Protected guard={isLogin}>

            <Stack.Screen name="testing" />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Protected guard={isAdmin}>
              <Stack.Screen name="profile" />
            </Stack.Protected>
          </Stack.Protected>
        </Stack>
      </CountContextProvider>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
