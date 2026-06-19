import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Home = ({ route }) => {
  const { userId, name } = route.params;
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
