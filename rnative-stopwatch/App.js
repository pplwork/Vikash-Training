import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./store";

import Controller from "./components/Controller";
import Screen from "./components/Screen";
import Lap from "./components/Lap";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Screen />
        <Controller />
        <Lap />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
  },
});
