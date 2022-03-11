import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { data } from "../constants";
import BookmarkBtn from "../components/BookmarkBtn";

const BookDetails = ({ route }) => {
  const { itemId } = route.params;
  const bookId = itemId.id;
  const booksData = data.booksData;
  const thisBookArr = booksData.filter((item) => item.id === bookId);
  const thisBook = thisBookArr[0];

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={thisBook.image} />
        </View>

        <Text style={styles.title}>{thisBook.title}</Text>

        <Text style={styles.author}>{thisBook.author}</Text>

        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailCount}>{thisBook.pages}</Text>
            <Text style={styles.detailTitle}>Pages</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.detailCount}>{thisBook.rating}</Text>
            <Text style={styles.detailTitle}>Rating</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.detailCount}>{thisBook.duration}</Text>
            <Text style={styles.detailTitle}>Duration</Text>
          </View>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>Summary</Text>

        <ScrollView>
          <Text style={styles.description}>{thisBook.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.btns}>
        <BookmarkBtn />

        <Pressable
          style={styles.read}
          onPress={() => Linking.openURL(thisBook.book)}
        >
          <Text style={styles.btnText}>Read</Text>
        </Pressable>

        <Pressable
          style={styles.listen}
          onPress={() => Linking.openURL(thisBook.audioBook)}
        >
          <Text style={styles.btnText}>Listen</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  upper: {},
  imgContainer: {
    paddingTop: 20,
  },
  img: {
    width: 175,
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
  },
  author: {
    color: "grey",
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#222",
    paddingVertical: 10,
    margin: 20,
    borderRadius: 15,
  },
  detail: {
    padding: 10,
  },
  detailCount: {
    color: "#fff",
    textAlign: "center",
  },
  detailTitle: {
    fontSize: 16,
    color: "#999",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  description: {
    color: "grey",
    lineHeight: 20,
    fontSize: 15,
    paddingTop: 5,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  read: {
    backgroundColor: "#ffba66",
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  listen: {
    backgroundColor: "pink",
    borderRadius: 5,
    flex: 1,
  },
});
