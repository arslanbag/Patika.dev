import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container :{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:200
    },
    content :{
        justifyContent:'center',
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:20,
        padding:40,
        flexDirection:'column',
        backgroundColor:'white',
        
    },

    indicatorView : {

    },
    partOne : {
        flexDirection:'row',
    },
    partTwo : {
        alignItems:'center'
    },

    textView : {
        fontSize:20,
        color:'#ef5350',

        justifyContent:'center'
    },
    text : {
        fontSize:20,
        color:'#ef5350',
        marginLeft:10,
    },
    link : {
        fontSize:12,
        color:'black',
        textDecorationLine: 'underline',
        opacity:0.8,
    }

})