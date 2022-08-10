import React from "react";
import ZocialIcon from "react-native-vector-icons/Zocial";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import FoundationIcon from "react-native-vector-icons/Foundation";
// import EvilIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FAIcons from "react-native-vector-icons/FontAwesome";
import Faicons5 from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";

const getIconFont = (type) => {
  switch (type) {
    case "ZocialIcon":
      return ZocialIcon;
    case "Octicons":
      return Octicons;
    case "MaterialIcons":
      return MaterialIcons;
    case "MaterialCommunityIcon":
      return MaterialCommunityIcon;
    case "FoundationIcon":
      return FoundationIcon;
    case "Ionicon":
      return Ionicon;
    // case "EvilIcon":
    //   return EvilIcon;
    case "EntypoIcon":
      return EntypoIcon;
    case "FAIcons":
      return FAIcons;
    case "SimpleLineIcons":
      return SimpleLineIcons;
    case "Faicons5":
      return Faicons5;
    case "AntDesign":
      return AntDesign;
    case "Feather":
      return Feather;
    default:
      return Fontisto;
  }
};

const Icon = ({ type, ...props }) => {
  const FontIcon = getIconFont(type);
  return <FontIcon {...props} />;
};

export default Icon;