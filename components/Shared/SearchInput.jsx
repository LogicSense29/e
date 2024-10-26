import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const SearchInput = () => {
  return (
    <View style={[styles.input, styles.shadowProp]}>
      <Feather
        name="search"
        size={24}
        color="rgba(0,0,0,0.5)"
        style={{ paddingRight: 10 }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search Event..."
        value=""
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    // marginBottom: 10,
  },
  textInput: {
    fontFamily: "montserrat-bold",
    fontSize: 16.5,
    width: "100%",
  },
});
