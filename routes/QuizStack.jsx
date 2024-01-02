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
      <Stack.Screen
        name="PlayQuiz"
        component={PlayQuiz}
        // options={{ tabBarStyle: { display: "flex" } }}
        // options={{ tabBarStyle: { display: "none" } }}
        // tabBarStyle={{ display: "none" }}
      />

      <Stack.Screen name="PlayQuizResult" component={PlayQuizResult} />
      {/* <Stack.Screen
        name="Questions"
        component={Questions}
        options={({ route }) => ({
          title: `Interview Questions: ${route.params.title}`,
        })}
      /> */}
    </Stack.Navigator>
  );
}
