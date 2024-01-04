import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import interviewQuestions from "../data/interviewQuestions";
import { FlashList } from "@shopify/flash-list";

export default function AnswerQuiz({ navigation, route }) {
  const [questions, setQuestions] = useState(
    route.params?.questions ? route.params?.questions : []
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setIsButtonDisabled(false);
        setAnswerStatus(null);
        setSelectedAnswer(null);
      }, 500);
    } else {
      setIsButtonDisabled(true);
    }
  };

  if (questions.length === 0 || !questions[currentQuestion]) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setIsButtonDisabled(false);
      setAnswerStatus(null);
      setSelectedAnswer(null);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleFinish = () => {
    const correctAnswers = questions.filter(
      (question) => question.correctAnswer === selectedAnswer
    );
    alert(
      `Quiz Finished!\nYour Score: ${score}/${
        questions.length
      }\nCorrect Answers:\n${correctAnswers
        .map((q) => q.correctAnswer)
        .join(", ")}`
    );
    navigation.navigate("İnterview");
  };
  // useEffect(() => {
  //   setCurrentQuestion(0);
  // }, []);

  return (
    <View style={styles.container}>
      <Text>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion]?.options?.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(option)}
          disabled={isButtonDisabled}
          style={[
            styles.button,
            answerStatus === "correct" &&
              option === questions[currentQuestion].correctAnswer &&
              styles.correctButton,
            answerStatus === "incorrect" &&
              option === selectedAnswer &&
              styles.incorrectButton,
          ]}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      {answerStatus && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {answerStatus === "correct" ? "Correct" : "Incorrect"}
          </Text>
        </View>
      )}
      <View>
        {currentQuestion < questions.length - 1 && (
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
        {currentQuestion === questions.length - 1 && (
          <TouchableOpacity onPress={handleFinish} style={styles.finishButton}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
    borderRadius: 5,
    alignItems: "center",
  },
  correctButton: {
    backgroundColor: "green",
  },
  incorrectButton: {
    backgroundColor: "red",
  },
  navigationButtons: {
    flexDirection: "row",
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightgray",
    borderRadius: 5,
    alignItems: "center",
  },
});
