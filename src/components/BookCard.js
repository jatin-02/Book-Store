import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Tag from "./Tag";

const BookCard = ({ bookData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={bookData.image} />
      </View>

      <View style={styles.details}>
        <View style={styles.upper}>
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.title}>
              {bookData.title}
            </Text>
            <Text style={styles.author}>{bookData.author}</Text>
          </View>

          {/* <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/bookmark.png")}
            />
          </View> */}
        </View>

        <View style={styles.tags}>
          <FlatList
            data={bookData.tags}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key={(item) => item.id}
            renderItem={({ item }) => {
              return <Tag tagsData={item} />;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
  },

  imgContainer: { flex: 0.4 },

  img: {
    width: 110,
    height: 150,
    borderRadius: 10,
  },
  details: {
    flex: 0.6,
  },
  upper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
  author: {
    color: "grey",
    fontSize: 12,
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: "#999",
  },
  tags: {
    marginTop: 15,
  },
});
