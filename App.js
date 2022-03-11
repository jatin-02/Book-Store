import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import StackNavigator from "./src/navigations/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
