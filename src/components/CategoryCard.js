import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CategoryCard = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={image} />
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  img: {
    width: 125,
    height: 175,
    borderRadius: 10,
  },
  title: {
    color: "grey",
    marginVertical: 5,
    width: "65%",
  },
});
