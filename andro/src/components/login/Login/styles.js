import { StyleSheet } from "react-native";
import color from "../../../assets/themes/color";

export default StyleSheet.create({
  logoImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginVertical: 35,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize:17
  },
  form:{
    paddingTop:20
  },
  createSection:{
    flexDirection:"row"
  },
  linkbtn:{
    paddingLeft:5,
    color:color.primary,
    fontSize:17
  },
  infoText:{
    fontSize:17
  }
});
