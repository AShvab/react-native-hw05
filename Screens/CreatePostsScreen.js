import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { gStyle } from "../styles/style";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Rect, G, ClipPath, Defs } from "react-native-svg";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [postPhoto, setPostPhoto] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [location, setLocation] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);


  const handleAddPhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.canceled && result.assets.length > 0) {
        setPostPhoto({ uri: result.assets[0].uri });
      }
    } else {
      console.log("Camera permission not granted");
    }
  };

  const checkInputForm = () => {
    if (photoName && location && postPhoto) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  useEffect(() => {
    checkInputForm();
  }, [photoName, location, postPhoto]);

  const removePost = () => {
    setPostPhoto(null);
    setPhotoName("");
    setLocation("");
  };

  const onSubmitClick = async () => {
    const data = {
      img: postPhoto,
      name: photoName,
      comments: [],
      likes: 0,
      location: location,
      userLocation: userLocation,
    };
    posts.push(data);
    removePost();
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{}}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={gStyle.screenContainer}>
          <View style={gStyle.headingContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={gStyle.backButton}
            >
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M20 12H4"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M10 18L4 12L10 6"
                  stroke="#212121"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            <Text style={gStyle.heading}>Створити публікацію</Text>
          </View>

          <View style={{ paddingTop: 28 }}>
            <View style={styles.postPhotoContainer}>
              <Image
                source={postPhoto ? postPhoto : null}
                style={{
                  width: "100%",
                  height: 240,
                  borderRadius: 8,
                }}
              />
              <TouchableOpacity
                onPress={handleAddPhoto}
                style={[
                  styles.addPhotoButton,
                  postPhoto
                    ? {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      }
                    : {},
                ]}
              >
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <G clip-path="url(#clip0_36_0)">
                    <Path
                      d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
                      fill="#BDBDBD"
                    />
                    <Path
                      d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                      fill="#BDBDBD"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_36_0">
                      <Rect width="24" height="24" fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.text}>
            {" "}
            {postPhoto ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <View>
            <TextInput
              style={[styles.inputText, styles.firstInput]}
              placeholder="Назва..."
              value={photoName}
              onChangeText={(text) => setPhotoName(text)}
            />

            <Feather
              name="map-pin"
              size={24}
              color={"#BDBDBD"}
              style={styles.mapPin}
            />
            <TextInput
              style={styles.inputTextMap}
              placeholder="Місцевість..."
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <View style={styles.publishButtonContainer}>
            <TouchableOpacity
              onPress={onSubmitClick}
              style={[
                gStyle.button,
                isButtonActive
                  ? {
                      backgroundColor: "#FF6C00",
                    }
                  : {
                      color: "#BDBDBD",
                      backgroundColor: "#F6F6F6",
                    },
              ]}
              title="Опублікувати"
              disabled={!isButtonActive}
            >
              <Text
                style={[
                  gStyle.buttonText,
                  isButtonActive
                    ? {
                        backgroundColor: "#FF6C00",
                      }
                    : {
                        color: "#BDBDBD",
                        backgroundColor: "#F6F6F6",
                      },
                ]}
              >
                Опублікувати
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={removePost}
            style={styles.removePostButton}
          >
            <Feather name="trash-2" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 10,
  },
  postPhotoContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 8,
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  addPhotoButton: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  inputText: {
    width: "100%",
    height: 50,
    marginTop: 20,
    fontSize: 16,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputTextMap: {
    width: "100%",
    height: 50,
    marginTop: 20,
    paddingLeft: 28,
    fontSize: 16,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    position: "relative",
  },
  mapPin: {
    position: "absolute",
    paddingLeft: 0,
    bottom: 13,
    left: 0,
  },
  firstInput: {
    marginTop: 30,
  },
  publishButtonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  removePostButton: {
    marginTop: 100,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;