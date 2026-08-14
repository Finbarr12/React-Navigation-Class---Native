import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const Modal_confirm = ({ setShow }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 24,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 16 }}>
          Delete this item?
        </Text>
        <Button title="Yes, delete" onPress={() => setShow(false)} />
        <Button title="Cancel" onPress={() => setShow(false)} />
      </View>
    </View>
  );
};

export default Modal_confirm;

const styles = StyleSheet.create({});
