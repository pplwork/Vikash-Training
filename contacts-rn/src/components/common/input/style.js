import { StyleSheet } from "react-native";
import color from "../../../assets/themes/color";

export default StyleSheet.create({
    wrapper:{
        height:42,
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:5,
        marginTop:5
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