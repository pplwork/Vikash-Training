import { StyleSheet } from "react-native";
import color from "../../assets/themes/color";

export default StyleSheet.create({
    logoImage:{
        marginVertical:20,
        alignSelf:"center",
        marginTop:50
    },
    item:{
        flexDirection:"row",
        alignItems:"center",
    },
    itemText:{
        fontSize:18,
        paddingVertical:10,
        paddingLeft:20,
        fontWeight:"500",
        color:"#000"
    }
})