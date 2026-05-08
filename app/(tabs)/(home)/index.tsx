import { useCount } from "@/hooks/provider/countContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage";
import { MMKV, SettingMMKV,MMKVSettingENC } from "@/app/mmkv/store";
import { useMMKVString } from "react-native-mmkv";
export default function HomeScreen() {
  // const colorScheme = useColorScheme();
  // const router = useRouter();

  // const [writeText, setWriteText] = React.useState("");

  //for object   

  const [formState, setFormState] = useState<{
    name: string,
    age: number
  }>({
    name: "",
    age: 0,
  })

  const { increaseCount, count, resetCount, decreaseCount } = useCount();


  //1.secure store for store small data (login token,user name) 
  // const handleSaveToSecureStore = async() => {
  //   await SecureStore.setItemAsync("name", writeText)
  // }
  // const handleDeleteToSecureStore = async() => {
  //   await SecureStore.deleteItemAsync("name")
  // }

  //2.async store 
  // const handleSaveAsyncStore = async () => {
  //   try {
  //     await AsyncStorage.setItem("name", writeText)
  //   } catch (error) {
  //     console.error("Error saving data to AsyncStorage:", error)
  //   }
  // }
  // const handleDeleteAsyncStore = async () => {
  //   try {
  //     await AsyncStorage.removeItem("name");
  //   } catch (error) {
  //     console.error("Error deleting data from AsyncStorage:", error)
  //   }
  // }

  //3.object state async storage

  // const handleObjectWithAsyncStoreDelete = async () => {
  //   try {
  //     await AsyncStorage.removeItem("form")
  //     setFormState({
  //       name: "",
  //       age: 0,
  //     })
  //   } catch (error) {
  //     console.error("Error getting data from AsyncStorage:", error)
  //   }
  // }

  // const handleObjectWithAsyncStoreSet = async () => {
  //   try {
  //     await AsyncStorage.setItem("form", JSON.stringify(formState))
  //   } catch (error) {
  //     console.error("Error saving data to AsyncStorage:", error)
  //   }
  // }

  const [name, setName] = useState("")
  
  // const  [user, setUser] = useMMKVStorage("user",MMKV,"")
  const  [user, setUser] = useMMKVStorage("user",MMKVSettingENC,"")
  // const [setting,setSetting] = useMMKVStorage("setting",SettingMMKV,"")
  
  //using expo mmkv
  // const  [user, setUser] = useMMKVString("user")
  // const [user,setUser] = useMMKVString("user")
  return (
    <View>
      <Text>Hello-{formState.name}</Text>
      <Text>{count}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
        {/* <TextInput placeholder="Enter your name" style={{ borderColor: "black", borderBottomWidth: 1, marginVertical: 10, width: '50%', alignSelf: 'center', color: "blue" }} onChangeText={(text) => setFormState({ ...formState, name: text })} />
        <TextInput placeholder="Enter your age" style={{ borderColor: "black", borderBottomWidth: 1, marginVertical: 10, width: '50%', alignSelf: 'center', color: "blue" }} onChangeText={(val) => setFormState({ ...formState, age: Number(val) })} /> */}

        {/* mmkv */}
        <TextInput placeholder="Enter your name" style={{ borderColor: "black", borderBottomWidth: 1, marginVertical: 10, width: '50%', alignSelf: 'center', color: "blue" }} defaultValue={name} onChangeText={(text) => setName(text)} />
       
       {/* async storage object */ }
        {/* <Button title="Save" onPress={handleObjectWithAsyncStoreSet} /> */}
        {/* <Button title="Delete" onPress={handleObjectWithAsyncStoreDelete} /> */}

        {/* mmkv */}
        <Button title="Save" onPress={()=> setUser(name)}  />
        <Button title="SaveMMKV" onPress={()=> MMKV.setString("user",name)}  />
        <Text>{user}</Text>
        <Button title="Delete" onPress={()=>MMKV.removeItem("user")}  />
      </View>
      <Button title="Increase Count" onPress={increaseCount} />
      <Button title="Decrease Count" onPress={decreaseCount} />
      <Button title="Reset Count" onPress={resetCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textMargin: {
    fontFamily: 'SpaceMono',
    marginBottom: 10,
    color: "blue",
    fontSize: 20,
  },
  textMargin1: {
    fontFamily: 'Roboto-Italic',
    marginBottom: 10,
    color: "blue",
    fontSize: 20,
  },
});

//1. local font
//     a. expo font
//     b. usefont so dae hook tone dr
//2.google font
//     a. expo font
//     b. usefont so dae hook tone dr


//3. vetor icons font  not popular
//4. dynamically load font not popular
