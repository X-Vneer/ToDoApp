import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
