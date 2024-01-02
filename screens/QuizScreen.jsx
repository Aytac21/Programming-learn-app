import React, { useEffect } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { gss } from "../components/globalStyles";

export default function QuizScreen({ navigation }) {
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "flex" } });
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <Text style={[gss.title]}>Quiz Screen</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("PlayQuiz")}
          style={styles.startBtn}
          pressDuration={0.2}
        >
          <Text style={styles.startBtnText}>start quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  startBtn: {
    padding: 10,
    backgroundColor: "violet",
    width: 130,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  startBtnText: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
};
