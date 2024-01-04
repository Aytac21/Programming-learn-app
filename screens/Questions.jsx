import React, { useState } from "react";
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
import { AnswerQuestion } from "./AnswerQuestion";

const windowHeight = Dimensions.get("window").height;

export default function Questions({ navigation, route }) {
  const title = route.params?.title;

  const allQuestions = interviewQuestions[title.toLowerCase()];
  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);

  const filterQuestions = (difficulty) => {
    const filtered = allQuestions.filter(
      (question) => question.difficulty === difficulty
    );
    setFilteredQuestions(filtered);
  };
  return (
    <View style={gss.flashlistContainer}>
      <Text style={gss.title}>{title}</Text>
      <ScrollView style={{ flex: 1, height: windowHeight }}>
        {/* FlashList for Easy questions */}
        <Text style={gss.title}>Asan</Text>
        <FlashList
          data={filteredQuestions.filter(
            (question) => question.difficulty === "Asan"
          )}
          estimatedItemSize={50}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AnswerQuestion", {
                  title: item,
                })
              }
              key={item.title}
            >
              <View style={styles.questionCard}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>{item.difficulty}</Text>:{" "}
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <Text style={gss.title}>Orta</Text>

        <FlashList
          data={filteredQuestions.filter(
            (question) => question.difficulty === "Orta"
          )}
          estimatedItemSize={50}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AnswerQuestion", {
                  title: item,
                })
              }
              key={item.title}
            >
              <View style={styles.questionCard}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>{item.difficulty}</Text>:{" "}
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* FlashList for Hard questions */}
        <Text style={gss.title}>Çətin</Text>

        <FlashList
          data={filteredQuestions.filter(
            (question) => question.difficulty === "Çətin"
          )}
          estimatedItemSize={50}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AnswerQuestion", {
                  title: item,
                })
              }
              key={item.title}
            >
              <View style={styles.questionCard}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>{item.difficulty}</Text>:{" "}
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    height: 50,
    borderWidth: 1,
    borderColor: "purple",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    width: "100%",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
});
