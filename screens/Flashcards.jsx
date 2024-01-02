import { MotiView } from "moti";
import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Flashcards({ navigation }) {
  const [visible, setVisible] = useState(true);
  return (
    <View>
      <Text>Flashcards</Text>
      <Pressable onPress={() => setVisible((prev) => !prev)}>
        <Text>press</Text>
        {visible && (
          <MotiView
            from={{
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "timing",
            }}
            style={styles.shape}
          />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "red",
  },
});
