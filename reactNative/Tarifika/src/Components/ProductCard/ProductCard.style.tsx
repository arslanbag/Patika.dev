import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        marginHorizontal:3,
        flex:1,
        padding:8
    },
    ImageView:{
        borderRadius:12,
    },
    Image:{
        minHeight:Dimensions.get('window').height/4.4,
        width:'100%',
        justifyContent:"flex-end",
        resizeMode:"cover",
        borderRadius:12
    },
    TextView:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomRightRadius:12,
        borderBottomLeftRadius:12,
        position:"absolute",
        justifyContent:'flex-end',
        bottom:0,
        width:'100%',
    },
    Text:{
        fontSize:30,
        color: 'white',
        fontWeight: '600',
        textAlign:"right",
        paddingLeft:16,
        paddingRight:7,
        lineHeight:35
       
    }
})