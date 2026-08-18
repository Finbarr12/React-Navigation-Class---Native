import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or 'react-native-vector-icons/Ionicons'

const toastStyles = {
  success: {
    borderColor: "#10B981",
    icon: "checkmark-circle",
    iconColor: "#10B981",
  },
  error: {
    borderColor: "#EF4444",
    icon: "close-circle",
    iconColor: "#EF4444",
  },
  info: {
    borderColor: "#3B82F6",
    icon: "information-circle",
    iconColor: "#3B82F6",
  },
  warning: {
    borderColor: "#F59E0B",
    icon: "warning",
    iconColor: "#F59E0B",
  },
};

const CustomToast = ({ text1, text2, type = "info" }) => {
  const style = toastStyles[type] || toastStyles.info;

  return (
    <View style={[styles.container, { borderLeftColor: style.borderColor }]}>
      <View style={styles.iconContainer}>
        <Ionicons name={style.icon} size={26} color={style.iconColor} />
      </View>

      <View style={styles.textContainer}>
        {text1 ? <Text style={styles.title}>{text1}</Text> : null}
        {text2 ? <Text style={styles.message}>{text2}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 16,
    borderLeftWidth: 5,
    paddingVertical: 14,
    paddingHorizontal: 16,
    width: "90%",
    minHeight: 68,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  iconContainer: {
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    marginBottom: 2,
  },
  message: {
    fontSize: 13.5,
    color: "#dbdbdb",
    lineHeight: 18,
  },
});

export default CustomToast;
