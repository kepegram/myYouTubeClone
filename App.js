import HomeScreen from "./screens/HomeScreen";
import ShortsScreen from "./screens/ShortsScreen";
import CreateScreen from "./screens/CreateScreen";
import SubsScreen from "./screens/SubsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#222222",
            borderTopColor: "grey",
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: "white",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shorts" component={ShortsScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Subscriptions" component={SubsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
