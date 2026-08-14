import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import Modal_confirm from "../components/Modal";

const Settings = () => {
  const [show, setShow] = useState(false);
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
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
