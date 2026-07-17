import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/Onboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Survey1 from "./screens/Survey1";
import Survey2 from "./screens/Survey2";
import Survey3 from "./screens/Survey3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Sign_up" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Survey" component={Survey1} />
        <Stack.Screen name="Survey2" component={Survey2} />
        <Stack.Screen name="Survey3" component={Survey3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
