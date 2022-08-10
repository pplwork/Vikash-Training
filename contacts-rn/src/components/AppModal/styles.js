import { StyleSheet } from "react-native";
import color from "../../assets/themes/color";
export default StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: color.white,
    minHeight: 350,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  header: {
    flexDirection: "row",
    borderBottomColor:color.grey,
    borderBottomWidth:2,
    padding: 15,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    marginRight:30
  },
  body: {
    minHeight:300,
    paddingVertical:10,
    paddingHorizontal:20,
  },
  footerSeperator: { height: 5, backgroundColor: color.grey },
  footerItems: { width: "100%", padding: 2 },
  footer: {
    justifyContent: "space-evenly",
    paddingVertical: 7,
    alignItems: "center",
    flexDirection: "row",
  },
  footerText: {
    fontSize:12
  },
  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: color.grey,
  },
});
