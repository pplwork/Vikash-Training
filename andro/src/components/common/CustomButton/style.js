import { StyleSheet } from "react-native";
import color from "../../../assets/themes/color";

export default StyleSheet.create({
    wrapper:{
        height:42,
        paddingHorizontal:5,
        marginVertical:5,
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center"
    },
    inputContainer:{
        paddingVertical:12
    },
    textInput:{
        flex:1,
    },
    error:{
        color:color.danger,
        paddingTop:2
    }
})