import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#eceff1",
        marginHorizontal:5,
        marginVertical:6,
        paddingLeft:3,
        flex:1,
        flexDirection:"row",
        borderColor:"grey",
        borderWidth:0.5,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,

    },
    ImageView:{
    },
    Image:{
        minHeight:Dimensions.get('window').height/10,
        minWidth:Dimensions.get('window').width/5,
        resizeMode:"contain",
        borderRadius:Dimensions.get('window').width,
    },
    TextView:{
            justifyContent:'center',
            paddingLeft:8
    },
    Text:{
        textAlignVertical:"center",
        fontWeight:"400",
        fontSize:20,
        color:"#2D2727"
    }
})