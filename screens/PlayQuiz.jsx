import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gss } from "../components/globalStyles";
import { frontendQuiz } from "../data/quizQuestions";
import PlayQuizQuestion from "./PlayQuizQuestion";
import { useTimer } from "react-timer-hook";

export default function PlayQuiz({ navigation }) {
  const time = new Date();
  const quizTime = 60;
  const { minutes, seconds, start, pause, restart, resume, isRunning } =
    useTimer({
      expiryTimestamp: time.setSeconds(time.getSeconds() + quizTime),
      onExpire: () => alert("vaxt tamamdir"),
    });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={{ color: "white" }}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
      ),
    });
  }, [navigation, minutes, seconds]);

  useEffect(() => {
    // navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
  }, [navigation]);

  return (
    <View style={gss.container}>
      <PlayQuizQuestion
        quizData={frontendQuiz}
        quizIndex={questionIndex}
        quizScore={quizScore}
        setQuizScore={setQuizScore}
        setQuizIndex={setQuestionIndex}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
