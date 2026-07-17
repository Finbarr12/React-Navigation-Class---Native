import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import StepProgressBar from "../components/StepProgressBar";
const Survey2 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Survey2</Text>

      <StepProgressBar steps={2} />

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("Survey3");
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Survey2;

const styles = StyleSheet.create({});
