import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import AddFiled from "../components/AddFiled";
import ItemsList from "../components/ItemsList";

const Home = () => {
  return (
    <View style={styles.app}>
      <View style={{ flex: 1 }}>
        <Header />
        <AddFiled />
        <ItemsList />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "white",
  },
});
