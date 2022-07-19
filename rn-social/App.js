import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import store from "./store";
import { Provider } from "react-redux";

import Profile from "./src/component/screens/Profile";
import Home from "./src/component/screens/Home";
import Search from "./src/component/screens/Search";
import Reels from "./src/component/screens/Reels";
import Activity from "./src/component/screens/Activity";
import Add from "./src/component/screenComponents/Add";
import Save from "./src/component/screenComponents/Save";

import Status from "./src/component/screenComponents/Status";
import FriendProfile from "./src/component/screenComponents/FriendProfile";
import EditProfile from "./src/component/screenComponents/EditProfile";

import LandingScreen from "./src/login/Landing";
import Register from "./src/login/Register";
import Login from "./src/login/Login";

import { auth } from "./firebase.config";
import { login } from "./src/redux/actions/userActions";

export default function App() {
  const [loogedIn, setLoogedIn] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setLoaded(false);

    auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoogedIn(false);
        setLoaded(true);
      } else {
        console.log(user);
        setLoaded(true);
        setLoogedIn(true);
        console.log(user.displayName, user.email);
      }
    });
  }, []);

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },

        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "ios-search-outline";
          } else if (route.name === "Reels") {
            iconName = focused
              ? "caret-forward-circle"
              : "caret-forward-circle-outline";
          } else if (route.name === "Activity") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Loading...</Text>
      </View>
    );
  }

  if (!loogedIn) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            {/* <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          /> */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  return (
    // <Text style={{fontFamily:"OpenSans"}}>HI</Text>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Bottom" component={BottomTabScreen} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="FriendProfile" component={FriendProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Save" component={Save} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
