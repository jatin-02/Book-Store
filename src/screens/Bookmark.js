import { FlatList, StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { data } from "../constants";
import BookCard from "../components/BookCard";

const Bookmark = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.booksData}
        renderItem={({ item }) => {
          const id = item.id;
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("BookDetails", {
                  itemId: { id },
                })
              }
            >
              <BookCard bookData={item} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flex: 1,
    paddingLeft: 15,
  },
});
