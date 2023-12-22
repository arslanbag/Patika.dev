import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1, 
        flexWrap:'wrap',
        margin:10,
        backgroundColor: '#f2f2f2',
    },
    image:{
        width:'100%',
        height:Dimensions.get('window').height/2.8,
        resizeMode:'cover'
    },
    viewHeader:{
        borderBottomWidth:0.5,
        borderColor:"black",
        paddingVertical:5,
        paddingLeft:5,
        marginBottom:3,
        paddingBottom:10,
    },
    textHeader:{
        color:"#a72f2f",
        fontSize:24,
        fontWeight:"bold",
    },
    textArea:{
        color:"#a72f2f",
        fontWeight:"bold",
        fontSize:16,
    },
    viewContent:{
        
    },
    textDescription:{
        color:"black",
        fontSize:12,
        fontWeight:"600",
        paddingLeft:10
    },
    pressableButton:{
        backgroundColor:"red",
        padding:5,
        borderRadius:5,
        marginHorizontal:5,
        marginVertical:15   
    },
    textButton:{
        color:"white",
        textAlign:"center",
        minHeight:23,
        fontWeight:"600"
    }
})