import React from "react";
import { Button, Text, View } from "react-native";

export default function Second({ navigation }) {
  return (
    <View>
      <Text>second</Text>
      <Button title="go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
