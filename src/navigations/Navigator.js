import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Easing } from "react-native";
import Home from "./../screens/Home";
import Category from "./../screens/Category";
import Search from "./../screens/Search";
import Bookmark from "./../screens/Bookmark";
import Profile from "./../screens/Profile";
import BookDetails from "./../screens/BookDetails";
import CategoryBooks from "./../screens/CategoryBooks";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#222",
          paddingTop: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home-filled"
              size={25}
              color={focused ? "pink" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={25}
              color={focused ? "pink" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "pink",
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              size={25}
              color={focused ? "pink" : "#fff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "pink",
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark"
              size={23}
              color={focused ? "pink" : "#fff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Category" component={Category} />

      <Stack.Screen
        name="CategoryBooks"
        component={CategoryBooks}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="BookDetails"
        component={BookDetails}
        options={{
          title: "Book Details",
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "My Profile",
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
