import { StyleSheet, Text, View } from "react-native";
import LocationComponent from "../Shared/LocationComponent";
import React from "react";

const time = () => {
  const hour = new Date();
  const hourRange = hour.getHours();

  if (hourRange >= 0 && hourRange < 12) {
    return "Good morning 👋";
  } else if (hourRange >= 12 && hourRange < 16) {
    return "Good Afternoon 👋";
  } else if (hourRange >= 16 && hourRange < 22) {
    return "Good Evening 👋";
  } else {
    return "Good Night 👋";
  }
};

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.boldFont, { color: "rgba(0,0,0,0.5)" }]}>
        {time()}
      </Text>
      <Text style={{ fontSize: 23, fontFamily: "montserrat-bold" }}>
        Get Informed of Events
      </Text>
      <LocationComponent />
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    // backgroundColor: "green",
    height: "75%",
  },
  regularFont: {
    fontFamily: "montserrat-regular",
    fontSize: 16,
  },
  boldFont: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
  },
});
