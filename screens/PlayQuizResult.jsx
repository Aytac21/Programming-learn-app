import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gss } from "../components/globalStyles";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function PlayQuizResult({ route }) {
  return (
    <View style={[gss.container, styles.container]}>
      <Text>{route?.params.quizScore}</Text>
      <Text>asd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  indexLabel: {
    color: "purple",
    fontSize: 12,
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 22,
    color: "#343434",
    marginTop: 8,
  },
  answerContainer: {
    gap: 12,
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
  },
  answerBtn: {
    borderRadius: 6,
    backgroundColor: "white",
    padding: 10,
    width: "100%",
    borderColor: "lightgray",
    borderWidth: 2,
  },
  answerBtnText: {
    fontWeight: "bold",
  },
  selectedAnswer: {
    backgroundColor: "pink",
    borderColor: "purple",
  },
  nextBtn: {
    backgroundColor: "#0E0E0E",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  nextBtnText: {
    color: "white",
    fontSize: 18,
  },
});
