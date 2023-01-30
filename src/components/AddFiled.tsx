import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { shallow } from "zustand/shallow";
import useAppState from "../store";

const AddFiled = () => {
  const { text, setText, addItem } = useAppState(
    (state) => ({
      text: state.inputText,
      setText: state.inputTextChange,
      addItem: state.addItem,
    }),
    shallow
  );
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="write here..."
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={() => addItem(text)} style={styles.button}>
        <Text style={styles.buttonText}>Add NEW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddFiled;

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#191919",
    textAlign: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginLeft: 20,
    borderRadius: 50,
  },
  buttonText: {
    fontWeight: "900",
    color: "white",
  },
});
