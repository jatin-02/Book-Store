import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { data } from "../constants";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
      </View>

      <View>
        <View style={styles.userDetail}>
          <Text style={styles.boldText}>Name - </Text>
          <Text style={styles.lightText}>Simran Malhotra</Text>
        </View>
        <View style={styles.userDetail}>
          <Text style={styles.boldText}>I'd - </Text>
          <Text style={styles.lightText}>Simran@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    paddingVertical: 40,
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  userDetail: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  boldText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  lightText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 18,
  },
  btnText: {
    color: "grey",
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 50,
    padding: 10,
  },
});
