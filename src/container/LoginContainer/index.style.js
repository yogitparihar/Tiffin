import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
    },
    innerContainer:{
        marginVertical:40,
    },
    titleStyle:{
        marginTop:25,
        fontSize:25,
        fontWeight:'700',
        marginHorizontal:30
    },
    iconstyle:{
        left:10,
        right:10,
        top:10
    },
    eyeicon:{
        top:10,
        position:'absolute',
        right:15
    },
    bottomcontainer:{
        flexDirection:'row',
        marginHorizontal:30
    }
})