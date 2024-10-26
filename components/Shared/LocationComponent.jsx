import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { Ionicons, MaterialIcons } from "@expo/vector-icons/";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";

const LocationComponent = () => {
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setAddress(address);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (address) {
    text = JSON.stringify(address);
    text = address[0].city;
  }

  return (
    <View style={styles.container}>
      <Ionicons name="location-outline" size={24} color={Colors.primary} />
      <Text style={[styles.boldFont, { color: Colors.primary }]}>{text}</Text>
      <MaterialIcons
        name="keyboard-arrow-down"
        size={24}
        color={Colors.primary}
      />
    </View>
  );
};

export default LocationComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
    justifyContent: "space-between",
    width: 170,
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
