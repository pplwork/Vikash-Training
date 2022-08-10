import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigation";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import DrawNavigator from "./DrawerNavigator";

// "user": Object {
//   "email": "vp@hotmail.com",
//   "first_name": "vikash",
//   "last_name": "patel",
//   "username": "vp",

//vick tick -username => pick 12345678 pick@hotmail.com

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);
  const getUser = async () => {
    setAuthLoaded(true);
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setAuthLoaded(false);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(false);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [isAuthenticated, isLoggedIn]);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      {!authLoaded ? (
        <NavigationContainer>
          { isAuthenticated ? (
            // <HomeNavigator />
            <DrawNavigator/>
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
