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

export default function PlayQuizQuestion({
  quizData,
  quizIndex,
  quizScore,
  setQuizScore,
  setQuizIndex,
  navigation,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  return (
    <View style={[gss.container, styles.container]}>
      <Text style={styles.indexLabel}>
        Questions {quizIndex + 1} of {quizData.length}
      </Text>
      <Text style={styles.questionText}>{quizData[quizIndex].question}</Text>
      <View style={styles.answerContainer}>
        {quizData[quizIndex].options.map((option, ind) => (
          <TouchableOpacity
            key={ind}
            onPress={() => {
              if (ind === quizData[quizIndex].answerIndex) {
                setQuizScore((prev) => prev + 1);
              }
              setSelectedAnswer(ind);
            }}
            style={[
              styles.answerBtn,
              selectedAnswer === ind && styles.selectedAnswer,
            ]}
          >
            <Text style={styles.answerBtnText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Pressable
        style={styles.nextBtn}
        onPress={() => {
          if (quizIndex < quizData.length - 1) {
            setQuizIndex((prev) => prev + 1);
            setSelectedAnswer(null);
          } else {
            navigation.navigate("PlayQuizResult", { quizScore });
          }
        }}
      >
        <Text style={styles.nextBtnText}>Next</Text>
        <AntDesign name="arrowright" color="white" size={16} />
      </Pressable>
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
