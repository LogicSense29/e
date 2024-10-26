import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Greeting from "./Greeting";
import Navbar from "./Navbar";
import SearchInput from "../Shared/SearchInput";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Greeting />
        <Navbar />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <SearchInput />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
