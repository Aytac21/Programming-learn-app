import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Questions from "../screens/Questions";
import Interview from "../screens/Interview";
import QuizScreen from "../screens/QuizScreen";
import PlayQuiz from "../screens/PlayQuiz";
import PlayQuizResult from "../screens/PlayQuizResult";
const Stack = createNativeStackNavigator();

export default function QuizStack() {
  return (
    <Stack.Navigator
      initialRouteName="QuizScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="PlayQuiz" component={PlayQuiz} />

      <Stack.Screen name="PlayQuizResult" component={PlayQuizResult} />
    </Stack.Navigator>
  );
}
