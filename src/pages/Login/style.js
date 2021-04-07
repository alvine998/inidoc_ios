import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    border:{
        borderBottomWidth:1,
        width:normalize(170)
    },
    title:{
        fontSize:normalize(22),
        color:'white'
    },
    btnContainer:{
        paddingLeft:normalize(20),
        paddingRight:normalize(20),
        paddingTop:normalize(20)
    },
    btnInside:{
        width:normalize(300)
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:normalize(20)
    }
})