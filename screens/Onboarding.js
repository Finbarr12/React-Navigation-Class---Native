import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/imageOnboard.jpeg")}
      style={styles.img_background}
    >
      <View style={styles.overlay}>
        <Text style={styles.onboardTitle}>
          Fall in Love with Coffee in Blissful Delight!
        </Text>
        <Text style={styles.onboardDescription}>
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            navigation.navigate("Sign_up", {
              userId: 1,
              name: "Vanessa Opeyemi",
              Class: "MMS",
            });
          }}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  img_background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  onboardTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 60,
    width: "80%",
    fontWeight: "700",
    marginTop: 400,
  },
  onboardDescription: {
    fontSize: 18,
    color: "lightgray",
    width: "80%",
    textAlign: "center",
    marginTop: 20,
  },

  getStartedButton: {
    width: "80%",
    height: 70,
    backgroundColor: "#c67c4e",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  getStartedButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
