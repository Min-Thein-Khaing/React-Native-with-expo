import { useColorScheme } from "@/hooks/use-color-scheme";
import { Link, useRouter } from "expo-router";
import React, { FC, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" }]}>
      <Link href="/setting" asChild><Button title="Go to setting" /></Link>
      <Button title="Go to Detail" onPress={() => router.navigate({ pathname: "/detail", params: { id: 1 } })} color="green" />
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
