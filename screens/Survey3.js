import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StepProgressBar from "../components/StepProgressBar";

const Survey3 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Survey3</Text>
      <StepProgressBar steps={3} />
    </View>
  );
};

export default Survey3;

const styles = StyleSheet.create({});
