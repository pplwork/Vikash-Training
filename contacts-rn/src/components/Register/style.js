import { StyleSheet } from "react-native";
import color from "../../assets/themes/color";

export default StyleSheet.create({
    logoImage:{
        marginVertical:20,
        alignSelf:"center",
        marginTop:50
    },
    title:{
        fontSize:21,
        textAlign:"center",
        paddingTop:20,
        fontWeight:"500"
    },
    subtitle:{
        fontSize:17,
        paddingVertical:10,
        fontWeight:"400",
        textAlign:"center"
    },
    form:{
        paddingTop:20,
    },
    registers:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    linkbtn:{
        color:color.primary
    }
})