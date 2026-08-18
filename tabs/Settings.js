import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import Modal_confirm from "../components/Modal";
import Toast from "react-native-toast-message";

const Settings = () => {
  const [show, setShow] = useState(false);

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Registration failed",
      text2: "Please try again later.",
      visibilityTime: 4000,
      topOffset: 30,
    });
  };

  const askToConfirm = () => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Item deleted"),
        },
      ],
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        style={{ padding: 10, backgroundColor: "red", borderRadius: 5 }}
        onPress={askToConfirm}
      >
        <Text style={{ color: "white" }}>Delete item</Text>
      </Pressable>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "red",
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={() => setShow(true)}
      >
        <Text style={{ color: "white" }}>Show modal</Text>
      </Pressable>

      <Modal visible={show} transparent={true} animationType="fade">
        <Modal_confirm setShow={setShow} />
      </Modal>

      <Pressable
        style={{
          padding: 10,
          backgroundColor: "red",
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={showToast}
      >
        <Text style={{ color: "white" }}>Show toast message</Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
