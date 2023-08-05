import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { gStyle } from "../styles/style";

import userPhoto from "../assets/images/userPhoto.jpg";
import posts from "../posts";

const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={gStyle.screenContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Публікації</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.logoutButton}
        >
          <Feather name="log-out" size={24} color={"#BDBDBD"} />
        </TouchableOpacity>
      </View>
      <View style={styles.userCard}>
        <Image style={styles.userPhoto} source={userPhoto} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={item.img} style={styles.img} />

            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.componentsContainer}>
              <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                <Svg
                  width="24"
                  height="24"
                  onPress={() => navigation.navigate("Comments", item)}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5Z"
                    fill="#FF6C00"
                  />
                </Svg>
                <Text>{item.comments}</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                <Feather name="thumbs-up" size={24} color={"#FF6C00"} />
                <Text>{item.likes}</Text>
              </View>
              <View
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Feather
                  name="map-pin"
                  size={24}
                  color={"#BDBDBD"}
                  onPress={() => navigation.navigate("Map", item)}
                />
                <Text
                  style={{
                    textDecorationLine: "underline",
                    marginRight: 8,
                  }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  heading: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    marginLeft: "auto",
    marginRight: "auto",
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 30,
    marginBottom: 30,
  },

  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },

  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },

  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  img: {
    width: "100%",
    height: 240,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
  },
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 10,
  },
  componentsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
    marginBottom: 40,
  },
});

export default PostsScreen;
