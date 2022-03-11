import { StyleSheet, View, FlatList, Pressable } from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";
import { data } from "../constants";

const Category = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.categoryData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        key={(item) => item.id}
        renderItem={({ item }) => {
          const title = item.title;
          return (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate("CategoryBooks", {
                  itemTitle: { title },
                })
              }
            >
              <CategoryCard image={item.image} title={item.title} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#111",
  },
  card: {
    padding: 20,
  },
});
