import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import Container from "../../components/common/container";
import styles from "./style.js";
import { SETTINGS } from "../../constants/routeNames";
import logout from "../../context/actions/auth/logout";
import Icon from "../../components/common/container/Icons/Index";
import Fontisto from "react-native-vector-icons/Fontisto";
import Logout from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const SideMenu = ({ navigation, authDispatch }) => {
  const handleLogout = () => {
    console.log("navbar toggle");
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you shure you want to logout?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "OK",
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Fontisto name="fontisto" size={15}/>,
      name: "Settings",
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Logout name="logout" size={15}/>,
      name: "Logout",
      onPress: () => {
        handleLogout();
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logoImage}
        />
        <View style={{ paddingHorizontal: 70 }}>
          {menuItems.map(({ icon, name, onPress }, i) => (
            <TouchableOpacity onPress={onPress} key={i} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
