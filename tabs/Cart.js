import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const Cart = () => {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);

      try {
        let response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`,
          {
            headers: {
              "User-Agent": "Location-App/1.0 (ogbonnafinbarr@gmail.com)",
            },
          },
        );

        let data = await response.json();
        // console.log(data);
        setAddress(data);
      } catch (error) {
        console.log(error);
      }
    }

    getCurrentLocation();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = address.display_name;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cart</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
