import { useColorScheme } from "@/hooks/use-color-scheme";
import { FC, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type StaffProps = {
  name: string;
};
const Staff: FC<StaffProps> = (props) => {
  const colorScheme = useColorScheme();
  const [isDelete,setDelete] = useState(false);
  return (<View style={{ flexDirection: "row", marginBottom: 10 ,alignItems: "center"}}>
      <Text style={{ textDecorationLine: isDelete ? "line-through" : "none" ,fontFamily: 'SpaceMono', color: colorScheme === "dark" ? "#fff" : "#000"}}>
        {props.name}
      </Text>
      <View style={{ marginLeft: 10 }}>
        <Button
      
        title={`${isDelete ? "Undo" : "Delete"}`}
        color="#e31837" 
        onPress={() => setDelete(prev => !prev)}
      />
      </View>

    </View>
  );
};




export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" }]}>
      <Text style={styles.textMargin }>Hello mobile developer</Text>
      <Staff name="min thein khaing" />
      <Staff name="min min khaing" />
      <Staff name="zaw zaw khaing" />
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
});
