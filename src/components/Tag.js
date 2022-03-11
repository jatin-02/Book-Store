import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Tag = ({ tagsData }) => {
  return (
    <View style={{ ...styles.tagContainer, backgroundColor: "#444" }}>
      <Text style={{ ...styles.tagText, color: "#000" }}>{tagsData}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tagContainer: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginRight: 5,
    marginVertical: 3,
  },
  tagText: {
    fontSize: 12,
  },
});
