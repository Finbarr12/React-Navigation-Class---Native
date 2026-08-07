import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const schools = [
  {
    name: "Children's International School",
    description: "Lekki Phase 1",
    coordinate: { latitude: 6.4484903, longitude: 3.4843816 },
  },
  {
    name: "Grange School, Lagos",
    description: "Ikeja GRA",
    coordinate: { latitude: 6.5887556, longitude: 3.3547575 },
  },
  {
    name: "Supreme Education Foundation Schools",
    description: "Magodo",
    coordinate: { latitude: 6.618373, longitude: 3.3802494 },
  },
  {
    name: "Banana Island International School",
    description: "Banana Island, Ikoyi",
    coordinate: { latitude: 6.4638091, longitude: 3.4539237 },
  },
  {
    name: "The Foreshore School",
    description: "Osborne Foreshore, Ikoyi",
    coordinate: { latitude: 6.4615123, longitude: 3.4096188 },
  },
];

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        // showsUserLocation
        // followsUserLocation
        initialRegion={{
          latitude: 6.5244,
          longitude: 3.3792,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        }}
      >
        {schools.map((props, index) => (
          <Marker
            key={index}
            coordinate={props.coordinate}
            title={props.name}
            description={props.description}
          >
            <Image
              source={require("../assets/school_loca.png")}
              style={{ height: 32, width: 32 }}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
