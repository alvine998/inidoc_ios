import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

export const styles = StyleSheet.create({
    mainContent:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    image:{
        width:normalize(400),
        height:normalize(220),

    },
    text:{
        color:'white',
        backgroundColor:'transparent',
        textAlign:'center',
        paddingHorizontal: 16,
        marginTop:normalize(20)
    },
    title:{
        
    }
})