import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const SignUp = ({ route }) => {
  const navigation = useNavigation();
  const { userId, name, Class } = route.params;
  return (
    <SafeAreaView
      style={{ flex: "1", justifyContent: "center", alignItems: "center" }}
    >
      <Text>SignUp</Text>
      <Pressable
        onPress={() => {
          navigation.push("Sign_up");
        }}
        style={{
          width: "50%",
          height: 60,
          backgroundColor: "gold",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Go to sign up</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: "50%",
          height: 60,
          backgroundColor: "gold",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>Go Back</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.push("Welcome", {
            userId: 1,
            name: "Emmanuel Dauda",
          });
        }}
        style={{
          width: "50%",
          height: 60,
          backgroundColor: "gold",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text>Enter</Text>
      </Pressable>
      <Text>{name}</Text>
      <Text>{Class}</Text>
    </SafeAreaView>
  );
};

export default SignUp;
