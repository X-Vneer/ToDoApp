import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import useAppState from "../store";

const RenderedItem = ({ text, id }: { text: string; id: string }) => {
  const removeItem = useAppState((state) => state.remoeItem);
  return (
    <View style={styles.renderedItemWrapper}>
      <View style={styles.textWrapper}>
        <Text
          style={{
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 18,
            // color: "#fafafa",
          }}
        >
          {text}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => removeItem(id)}
      >
        <Text
          style={{
            // color: "white",
            fontWeight: "600",
            fontSize: 30,
          }}
        >
          ×
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const ItemsList = () => {
  const items = useAppState((state) => state.toDoList);
  return (
    <View style={styles.listContainer}>
      <FlashList
        data={items}
        renderItem={({ item }) => (
          <RenderedItem text={item.item} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    marginHorizontal: 30,
    flex: 1,
  },
  renderedItemWrapper: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#E02401",
    borderWidth: 1,
    borderColor: "#E02401",
    borderRadius: 3,
  },
  deleteButton: {
    paddingHorizontal: 12,
    borderRadius: 1000,
  },
  textWrapper: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flex: 8,
  },
});
