import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import StepProgressBar from "../components/StepProgressBar";

const Survey1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Survey1</Text>

      <StepProgressBar steps={1} />

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.navigate("Survey2");
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Survey1;

const styles = StyleSheet.create({});
