import HomeNavigator from "./HomeNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME_NAVIGATOR } from "../constants/routeNames";
import Container from "../components/common/container";
import { SafeAreaView } from "react-native";
import SideMenu from "./Sidemenu";
import React from "react";
import { GlobalContext } from "../context/Provider";

const NavItems = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoImage}
        />
      </Container>
    </SafeAreaView>
  );
};

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = React.useContext(GlobalContext);
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerType="back"
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
