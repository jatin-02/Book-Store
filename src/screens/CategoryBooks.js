import { FlatList, StyleSheet, Pressable, View, Button } from "react-native";
import React from "react";
import { data } from "../constants";
import BookCard from "../components/BookCard";

const CategoryBooks = ({ route, navigation }) => {
  const { itemTitle } = route.params;
  const categoryTitle = itemTitle.title;
  const booksDataArr = data.booksData;

  const categoryBooksData = booksDataArr.filter(
    (item) => item.category === categoryTitle
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryBooksData}
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

export default CategoryBooks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flex: 1,
    paddingLeft: 15,
  },
});
