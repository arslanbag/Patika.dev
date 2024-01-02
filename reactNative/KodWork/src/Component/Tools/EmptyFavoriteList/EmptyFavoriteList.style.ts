import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        justifyContent:'center',
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingBottom:200,

    },
    content:{
        borderWidth:0.4,
        borderRadius:30,
        padding:80,
        borderColor:'#ef5350',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f5fbff'
    },
    text : {
        fontSize:16,
        color:'#ef5350',
        fontWeight:'400',
        opacity:0.5,

        
    },
    link : {
        fontSize:12,
        color:'black',
        textDecorationLine: 'underline',
        opacity:0.8,
    }
})