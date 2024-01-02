import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MainTabNavigator from "./routes/MainTabNavigator";
import "react-native-reanimated";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <MainTabNavigator />
    </NavigationContainer>
  );
}
