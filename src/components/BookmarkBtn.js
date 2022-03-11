import { StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const BookmarkBtn = () => {
  const [bookmark, setBookmark] = useState(false);

  const changeBookmark = () => {
    setBookmark(!bookmark);
    console.log(bookmark);
  };

  return (
    <Pressable onPress={() => changeBookmark()} style={styles.iconContainer}>
      {bookmark ? (
        <Ionicons name="md-bookmark" size={24} color="pink" />
      ) : (
        <Ionicons name="md-bookmark-outline" size={24} color="grey" />
      )}
    </Pressable>
  );
};

export default BookmarkBtn;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "grey",
  },
});
