import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BookShelf</Text>
      <Pressable onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "pink",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
