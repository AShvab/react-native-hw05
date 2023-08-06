import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Feather} from "@expo/vector-icons";
import posts from "../posts";
import userCircle from "../assets/images/userCircle.jpg";

import { gStyle } from "../styles/style";
import { useNavigation } from "@react-navigation/native";

const CommentsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(route.params.commentsUnderPost);

  const handleFocus = (placeholder) => {
    setFocusedInput(placeholder);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const clearInput = () => {
    setComment("");
  };

  const handleSubmitComment = async () => {
    const data = {
      author: "user",
        text: comment,
        date: "Just now",
        userCirclePhoto: userCircle,
    };
    comments.push(data);
    clearInput();
    Keyboard.dismiss();
  };

  return (
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
        <Text style={gStyle.heading}>Коментарі</Text>
      </View>
      <View>
        <Image source={route.params.img} style={styles.img} />
      </View>

      <FlatList
        data={route.params.commentsUnderPost}
        renderItem={({ item }) => {
          const isCommentByUser = item.author === "user";

          return (
            <View
              style={[
                styles.commentContainer,
                isCommentByUser
                  ? styles.userCommentContainer
                  : styles.guestCommentContainer,
              ]}
            >
              <Image
                source={
                  isCommentByUser ? item.userCirclePhoto : item.guestCirclePhoto
                }
                style={[
                  styles.commentUserImage,
                  isCommentByUser
                    ? styles.userCommentImage
                    : styles.guestCommentImage,
                ]}
              />

              <View
                style={[
                  styles.commentTextContainer,
                  isCommentByUser
                    ? styles.userCommentTextContainer
                    : styles.guestCommentTextContainer,
                ]}
              >

                 <Text style={styles.commentText}>{item.text}</Text>
          {isCommentByUser ? (
            <Text style={[styles.commentDate, styles.userCommentDate]}>
              {item.date}
            </Text>
          ) : (
            <Text style={[styles.commentDate, styles.guestCommentDate]}>
              {item.date}
            </Text>
          )}
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.bottomContainer}>
          <TextInput
            style={[
              gStyle.input,
              focusedInput === "Коментувати..." && gStyle.inputFocused,
              styles.inputComment,
            ]}
            onFocus={() => handleFocus("Коментувати...")}
            onBlur={handleBlur}
            placeholder="Коментувати..."
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmitComment}
          >
            <Feather name="arrow-up" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 240,
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
    marginBottom: 30,
  },
  inputComment: {
    borderRadius: 50,
  },
  bottomContainer: {
    position: "relative",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  submitButton: {
    position: "absolute",
    bottom: 24,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 24,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  commentUserImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 8,
  },
  commentTextContainer: {
    flex: 1,
    backgroundColor: "#212121",
    borderRadius: 8,
    padding: 16,
  },
  commentText: {
    fontSize: 13,
  },
  commentDate: {
    fontSize: 10,
    color: "#BDBDBD",
    marginTop: 4,
    textAlign:"left",
  },
  userCommentDate: {
    textAlign: "left",
  },
  guestCommentDate: {
    textAlign: "right",
  },
  userCommentContainer: {
    flexDirection: "row-reverse",
  },
  guestCommentContainer: {
    flexDirection: "row",
  },
  guestCommentImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  userCommentTextContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  guestCommentTextContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  userCommentImage: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginLeft: 16,
  },
});

export default CommentsScreen;