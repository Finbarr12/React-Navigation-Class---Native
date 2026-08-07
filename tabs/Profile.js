import { StyleSheet, Text, TextInput, View, Switch } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { OtpInput } from "react-native-otp-entry";
import { Picker } from "@react-native-picker/picker";

const Profile = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("Obi");
  const [size, setSize] = useState("M");
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isOn ? "black" : "white",
      }}
    >
      <TextInput
        style={{ width: 200, height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <TextInput
        placeholder="email address"
        // keyboardType="phone-pad"
        textContentType="oneTimeCode"
        // value={name}
        onChangeText={setName}
        style={{
          width: 200,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 20,
        }}
      />

      {/* <OtpInput
        numberOfDigits={4}
        onTextChange={(text) => console.log(text)}
        theme={{
          containerStyle: {
            width: 200,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginTop: 20,
            justifyContent: "space-between",
            paddingHorizontal: 10,
            borderColor: "gold",
          },
          pinCodeContainerStyle: {
            borderColor: "black",
          },
        }}
      /> */}
      <View
        style={{
          width: 200,
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 5,
          paddingHorizontal: 8,
          // backgroundColor: "red",
        }}
      >
        <TextInput
          placeholder="Password"
          secureTextEntry={show}
          style={{
            flex: 1,
            fontSize: 16,
            // borderWidth: 2,
          }}
        />

        {show ? (
          <AntDesign
            name="eye-invisible"
            size={18}
            color="black"
            onPress={toggle}
          />
        ) : (
          <AntDesign name="eye" size={18} color="black" onPress={toggle} />
        )}
      </View>
      <Text style={{ marginTop: 20, fontSize: 16 }}>Hello {name}</Text>

      <View>
        <Text>Choose a size: </Text>

        <Picker
          style={{
            width: 120,
            height: 50,
            backgroundColor: "#d4d4d4",
            borderRadius: 16,
          }}
          selectedValue={size}
          onValueChange={setSize}
        >
          <Picker.Item label="Small" value="S" />
          <Picker.Item label="Medium" value="M" />
          <Picker.Item label="Large" value="L" />
          <Picker.Item label="Extra Large" value="XL" />
          <Picker.Item label="Extra Extra Large" value="XXL" />
        </Picker>
        <Text>You picked: {size}</Text>
      </View>

      <View style={{ padding: 16, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginRight: 12 }}>Notifications:</Text>
        <Switch value={isOn} onValueChange={setIsOn} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
