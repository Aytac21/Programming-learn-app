import React, { Children } from "react";
import { Text, View } from "react-native";

export const Container = ({ backgroundColor = "red", children }) => {
  return <View style={{ backgroundColor }}>{children}</View>;
};
