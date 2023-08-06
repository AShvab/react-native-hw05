import React, {  useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { gStyle } from "../styles/style";

const MapScreen = ({navigation})=> {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg("Error getting location: " + error.message);
      }
    })();
  }, []);

  return (
    <>
      <View style={styles.headerWrap}>
        <TouchableOpacity
          style={styles.arrowSvg}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
        >
                    <Feather
              name="arrow-left"
              size={24}
              color={"#BDBDBD"}
              style={styles.backButton}
            />
        </TouchableOpacity>
        <Text style={gStyle.heading}>Карта</Text>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude:  50.423575,
            longitude: 30.382908,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
        >
          <Marker
            title="I am here"
            coordinate={{latitude:  50.423575, longitude: 30.382908 }}
            description="My location"
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerWrap: {
    fontSize: 30,
    paddingTop: 55,
    paddingBottom: 7,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },

  arrowSvg: {
    position: "absolute",
    left: 16,
    bottom: 7,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  backButton: {
    paddingLeft: 10,
  },
});

export default MapScreen;