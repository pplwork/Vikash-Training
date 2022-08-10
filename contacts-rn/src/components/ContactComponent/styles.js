import { StyleSheet } from "react-native";
import color from "../../assets/themes/color";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    lineHeight:15,
    color: "#000",
    fontWeight:"400"
  },
  phoneNumber: {
    opacity: 0.6,
    fontSize:15,
    paddingVertical:2,
    color: "#000"
  },
  addBtn:{
    fontWeight:500,
    backgroundColor:color.primary,
    width:55,height:55,
    position:"absolute",
    bottom:45,
    right:10,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
  },
});
