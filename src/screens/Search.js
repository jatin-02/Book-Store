import {
  Text,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { data } from "../constants";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Search = ({ navigation }) => {
  const [input, setInput] = useState("");

  const cancel = () => {
    setInput("");
  };

  const bookData = data.booksData;
  const searchData = bookData.filter((book) => {
    if (input == "") {
      return;
    } else {
      return book.title.toLowerCase().includes(input.toLowerCase());
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <View style={styles.iconStyle}>
          <Feather name="search" size={24} color="pink" />
        </View>

        <TextInput
          style={{ flex: 1, color: "#fff" }}
          placeholder="What to read ?"
          placeholderTextColor="pink"
          underlineColorAndroid="transparent"
          selectionColor={"#fff"}
          autoFocus={true}
          onChangeText={setInput}
          value={input}
        />

        <Pressable onPress={() => cancel()} style={styles.iconStyle}>
          <MaterialIcons name="cancel" size={20} color="#444" />
        </Pressable>
      </View>

      <FlatList
        data={searchData}
        renderItem={({ item }) => {
          const id = item.id;
          return (
            <TouchableOpacity
              style={styles.searchText}
              onPress={() => {
                navigation.navigate("BookDetails", {
                  itemId: { id },
                }),
                  cancel();
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 50,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    borderWidth: 1,
    borderColor: "pink",
    height: 40,
    borderRadius: 5,
    margin: 15,
  },
  iconStyle: {
    padding: 5,
  },
  title: {
    color: "#fff",
  },
  searchText: {
    marginHorizontal: 25,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
});
