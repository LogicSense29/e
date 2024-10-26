import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "70%" }}>
        <SearchInput />
      </View>

      <View style={{ width: "23%" }}>
        <Filter />
      </View>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "black",
    // paddingBottom: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});
