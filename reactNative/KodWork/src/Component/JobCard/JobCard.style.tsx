import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        minHeight: Dimensions.get('window').height/6.5,
        borderWidth:1.5,
        borderColor:'#cecece',
        borderRadius:10,
        backgroundColor:'#ffffff',
        padding:5,
        margin:10,
        paddingHorizontal:8
    },
    titleView :{
        textAlign:'left',
        justifyContent:'center',
    },
    companyView:{
        textAlign:'left',
        justifyContent:'center',
        marginBottom:5
    },
    locationView:{
        textAlign:'left',
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap: 'wrap',
    },
    jobLevelView:{
        textAlign:'right',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:5
    },
    title:{
        fontWeight:'600',
        fontSize:18,
        color:'black',
    },
    company:{
        fontWeight:'400',
        fontSize:16,
        color:'black',
    },
    location:{
        fontWeight:'600',
        fontSize:14,
        color:'white',
        backgroundColor: '#ef5350',
        borderRadius:50,
        padding:4,
        paddingHorizontal:14,
        alignSelf: 'baseline',
        margin:3
    },
    jobLevel:{
        fontWeight:'600',
        fontSize:14,
        color: '#ef5350',

    },
    buttonsView:{
        paddingVertical : 11,
        height:60,
        flexDirection:'row'
    },
    buttonsButton:{
        backgroundColor:'#ef5350',
        borderRadius :5 ,

        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
    },
    buttonsButtonText:{
        color :'white',
        fontSize:14,
        fontWeight:'400',
        marginLeft:5
    },

})