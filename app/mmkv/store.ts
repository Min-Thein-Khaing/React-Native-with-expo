//using npx expo install react-native-mmkv-storage
import { MMKVLoader } from 'react-native-mmkv-storage';

export const MMKV = new MMKVLoader().initialize();
export const SettingMMKV = new MMKVLoader().withInstanceID("setting").initialize();
export const UserMMKV = new MMKVLoader().withInstanceID("user").initialize();

export const MMKVENC = new MMKVLoader().withEncryption().initialize();
export const MMKVSettingENC = new MMKVLoader().withEncryption().withInstanceID("setting").initialize();



//expo default mmkv
// import { createMMKV } from "react-native-mmkv";

// export const MMKV = createMMKV();
// export const SettingMMKV = createMMKV({
//     id:"setting",
// });

// export const MMKVENC = createMMKV({
//     id:"encryption",
//     encryptionKey:"4f6e63652075706f6e20612074696d6520696e20612067616c61787920666172"
// });

// export const MMKVSettingENC = createMMKV({
//     id:"setting",
//     encryptionKey:"4f6e63652075706f6e20612074696d6520696e20612067616c61787920666172"
// });
 