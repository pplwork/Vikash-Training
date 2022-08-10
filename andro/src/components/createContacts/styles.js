import { StyleSheet } from "react-native";
import color from "../../assets/themes/color";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  imageView:{
    width:120,
    height:120,
    alignSelf:"center",
    borderRadius:100
  },
  choose:{
    color:color.primary,
    textAlign:"center"
  },
  input:{
    paddingLeft:15,
  }
});
