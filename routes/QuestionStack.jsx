import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Questions from "../screens/Questions";
import Interview from "../screens/Interview";
import AnswerQuestion from "../screens/AnswerQuestion";
import { interviewQuestions } from "../data/interviewQuestions";
import AnswerQuiz from "../screens/AnswerQuiz";

const Stack = createNativeStackNavigator();

export default function QuestionStack() {
  return (
    <Stack.Navigator
      initialRouteName="Interview"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Interview" component={Interview} />
      <Stack.Screen
        name="Questions"
        component={Questions}
        options={({ route }) => ({
          title: `Interview Questions: ${route.params.title}`,
        })}
      />
      <Stack.Screen
        name="AnswerQuestion"
        component={AnswerQuestion}
        options={({ route }) => ({
          title: `Questions: ${route.params.title.title}`,
        })}
      />
      <Stack.Screen
        name="AnswerQuiz"
        component={AnswerQuiz}
        options={({ route }) => ({
          title: `Questions`,
        })}
      />
    </Stack.Navigator>
  );
}
