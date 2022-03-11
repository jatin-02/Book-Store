import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import HomeHeader from "./../components/HomeHeader";
import CategoryCard from "./../components/CategoryCard";
import { data } from "../constants";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />

      <ScrollView>
        <View style={styles.categories}>
          <View style={styles.categoryHeader}>
            <Text style={styles.heading}>Categories</Text>
            <Pressable onPress={() => navigation.navigate("Category")}>
              <Text style={styles.more}>more</Text>
            </Pressable>
          </View>

          <View style={styles.cardComponent}>
            <FlatList
              data={data.categoryData}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const title = item.title;

                return (
                  item.home && (
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
                  )
                );
              }}
            />
          </View>
        </View>

        <View style={styles.categories}>
          <View style={styles.categoryHeader}>
            <Text style={styles.heading}>Best Seller</Text>
          </View>

          <View style={styles.bestSellerCards}>
            <FlatList
              data={data.booksData}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const id = item.id;
                return (
                  item.type == "bestSeller" && (
                    <Pressable
                      style={styles.card}
                      onPress={() =>
                        navigation.navigate("BookDetails", {
                          itemId: { id },
                        })
                      }
                    >
                      <CategoryCard image={item.image} title={item.title} />
                    </Pressable>
                  )
                );
              }}
            />
          </View>
        </View>

        <View style={styles.categories}>
          <View style={styles.categoryHeader}>
            <Text style={styles.heading}>Top Rated</Text>
          </View>

          <View style={styles.bestSellerCards}>
            <FlatList
              data={data.booksData}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const id = item.id;
                return (
                  item.type == "topRated" && (
                    <Pressable
                      style={styles.card}
                      onPress={() =>
                        navigation.navigate("BookDetails", {
                          itemId: { id },
                        })
                      }
                    >
                      <CategoryCard image={item.image} title={item.title} />
                    </Pressable>
                  )
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flex: 1,
    marginBottom: 30,
  },
  categories: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 25,
  },
  categoryHeader: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  more: {
    color: "grey",
    marginRight: 25,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  card: {
    paddingRight: 20,
  },
});
