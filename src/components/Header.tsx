import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        ToDo <Text style={styles.hotWord}>List</Text>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: "#191919",
    marginTop: 50,
    marginBottom: 10,
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  hotWord: {
    fontSize: 28,
    color: "#E02401",
  },
});
