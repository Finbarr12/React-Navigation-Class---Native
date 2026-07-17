import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";

const StepProgressBar = ({ steps }) => {
  let TOTAL_STEPS = 3;

  let progress = steps / TOTAL_STEPS;
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>Step {steps} of 3</Text>
      <ProgressBar
        progress={progress}
        color="red"
        style={{ width: 250, height: 8, borderRadius: 4 }}
      />
    </View>
  );
};

export default StepProgressBar;

const styles = StyleSheet.create({});
