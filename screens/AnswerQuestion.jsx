import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { gss } from "../components/globalStyles";
import { interviewQuestions } from "../data/interviewQuestions";
import { FlashList } from "@shopify/flash-list";
import { Questions } from "./Questions";

const windowHeight = Dimensions.get("window").height;

export default function AnswerQuestion({ route }) {
  const title = route.params?.title;
  const questionsData = interviewQuestions[title];

  return (
    <View style={gss.container}>
      <Text style={styles.title}>{title.title}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.difficulty}>{title.difficulty}</Text>
        <Text style={styles.answerText}>{title.answer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
    textAlign: "center",
  },
  cardContent: {
    padding: 16,
  },
  difficulty: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#3498db",
    textAlign: "center",
  },
  answerText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});
