import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AboutScreen from "../screens/AboutScreen";
import QuestionStack from "./QuestionStack";
import QuizStack from "./QuizStack";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Interview"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name="QuestionStack"
        component={QuestionStack}
        options={{
          tabBarLabel: "Question Stack",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="business-center" color={color} size={size} />
          ),
          headerTitle: "Frontend Interview Q&A",
          tabBarActiveTintColor: "purple",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizStack}
        options={{
          tabBarLabel: "Quiz",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="brain" color={color} size={size} />
          ),
          tabBarBadge: 1,
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Tips"
        component={AboutScreen}
        options={{
          tabBarLabel: "Tips",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="lightbulb" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
