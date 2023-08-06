import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Feather, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Tabs = createBottomTabNavigator();

const ActiveIcon = ({ iconName }) => {
  return (
    <View style={styles.activeIconContainer}>
      <View style={styles.activeIcon}>
        {iconName === "grid" ? (
          <Feather name="grid" size={24} color={"white"} />
        ) : (
          <Feather name="user" size={24} color={"white"} />
        )}
      </View>
    </View>
  );
};

// const Home = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           alignItems: "center",
//           height: 60,
//         },
//         tabBarLabelStyle: { display: "none" },
//       }}
//     >
//       <Tabs.Screen
//         name="Posts"
//         component={PostsScreen}
//         options={{
//           tabBarIcon: () => (
//             <Feather name="grid" size={24} color={"rgba(33, 33, 33, 0.8)"} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="CreatePost"
//         component={CreatePostsScreen}
//         options={{
//           tabBarStyle: { display: "none" },
//           tabBarIcon: () => (
//             <Ionicons
//               name="add"
//               size={24}
//               color={"ffffff"}
//               style={styles.addButtonContainer}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: () => (
//             <Feather name="user" size={24} color={"rgba(33, 33, 33, 0.8)"} />
//           ),
//         }}
//       />
//     </Tabs.Navigator>
//   );
// };
const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignItems: "center",
          height: 60,
        },
        tabBarLabelStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveIcon iconName="grid" />
            ) : (
              <Feather name="grid" size={24} color={"rgba(33, 33, 33, 0.8)"} />
            ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <Feather
              name="plus"
              size={24}
              color={"rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ActiveIcon iconName="user" />
            ) : (
              <Feather name="user" size={24} color={"rgba(33, 33, 33, 0.8)"} />
            ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  activeIconContainer: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  activeIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
