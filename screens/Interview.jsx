import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { gss } from "../components/globalStyles";
import { Icon } from "react-native-elements";
import { FlashList } from "@shopify/flash-list";
import { Container } from "../components/Container";
import RenderHtml from "react-native-render-html";
import { interviewQuestions } from "../data/interviewQuestions"; // Dosya yolunu doğru bir şekilde güncelleyin

const windowHeight = Dimensions.get("window").height;

const tableHTML = {
  html: `<table border="0" cellspacing="0" cellpadding="10" class="table table-bordered table-responsive" style="width: 100%; border: 1px solid">
  <tbody>
      <tr>
          <td style="border: 1px solid"><strong>№</strong></td>
          <td style="border: 1px solid"><strong>Name of the country</strong></td>
          <td style="border: 1px solid"><strong>Validity period of issued visa</strong></td>
      </tr>
      <tr>
          <td style="border: 1px solid">1</td>
          <td style="border: 1px solid">Qatar</td>
          <td style="border: 1px solid">30 days</td>
      </tr>
      <!-- ... (rest of the table rows) ... -->
  </tbody>
</table>
`,
};

export default function Interview({ navigation }) {
  const { width } = useWindowDimensions();
  const interviewTypes = Object.keys(interviewQuestions);

  const [inputValue, setInputValue] = useState("");
  return (
    <View style={gss.p10}>
      {/* <Container backgroundColor="green">
        <Text style={{ color: "white" }}>dasd</Text>
      </Container> */}
      {/* <RenderHtml contentWidth={width} source={tableHTML} /> */}
      <View style={styles.inputView}>
        <Icon color="#333" name="search" type="font-awesome" size={20} />
        <TextInput
          placeholder="Search topic"
          style={styles.input}
          placeholderTextColor="#333"
          onChangeText={(text) => setInputValue(text.toLowerCase())}
        />
      </View>
      <ScrollView
        style={{
          marginTop: 10,
          // width: Dimensions.get("screen").width,
          height: windowHeight,
          // flex: 1,
        }}
      >
        <FlashList
          data={interviewTypes.filter((el) =>
            el.toLowerCase().includes(inputValue)
          )}
          renderItem={({ item, ind }) => (
            <TouchableOpacity
              style={styles.listItem}
              activeOpacity={0.5}
              key={ind}
              onPress={() =>
                // ToastAndroid.show(String(item.title), ToastAndroid.SHORT)
                navigation.navigate("Questions", {
                  title: item,
                })
              }
            >
              <Text>{item}</Text>
              <Icon
                name="chevron-right"
                color="black"
                type="feather"
                size={200}
              />
            </TouchableOpacity>
          )}
          estimatedItemSize={40}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    height: 54,
    backgroundColor: "lightgray",
    borderRadius: 2,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 18,
    // border: "1px solid",
  },
  btn: {
    borderColor: "red",
    borderWidth: 1,
    padding: 2,
    borderStyle: "dashed",
    marginVertical: 5,
  },
  listItem: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    borderColor: "purple",
    borderWidth: 1,
  },
});
