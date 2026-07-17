import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Chat = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  const increaseProgress = () => {
    if (progress <= 0.9) {
      setProgress(progress + 0.1);
    } else {
      setProgress(0);
    }

    return progress;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 0.9) {
          return prev;
        }
        return prev + 0.1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size={100} color="red" /> */}
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {Math.round(progress * 100)}%
      </Text>
      <ProgressBar progress={progress} color="red" style={{ width: 200 }} />
      <Pressable
        style={{
          width: 250,
          height: 70,
          backgroundColor: "gold",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={increaseProgress}
      >
        <Text>Increase progress</Text>
      </Pressable>

      <Pressable
        style={{
          width: 250,
          height: 70,
          backgroundColor: "gold",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Survey")}
      >
        <Text>Start Survey</Text>
      </Pressable>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
