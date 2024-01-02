import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        marginHorizontal:6,
        marginBottom:15,
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'#e6e6e6', 
        flexGrow:1
    },
    headerView :{
        backgroundColor:'#f2f2f2',
        padding:5,
        paddingHorizontal:10,
        borderBottomWidth:2,
        borderColor:'#e6e6e6',
        minHeight:'16.2%'
    },
    headerTitleView :{
        alignItems:'flex-start',
    },
    headerTitleText :{
        color:'#37474f',
        fontSize:24,
        fontWeight:'600',
        flexWrap:'wrap'
    },
    headerSubTitleView :{
        alignItems:'flex-start', 
        margin:0,
        padding:0,
        flexDirection:'row',
        marginBottom:5,
        flexWrap:'wrap'
    },
    headerSubTitleTextLeft :{
        color:'#ef5350',
        fontSize:14,
        fontWeight:'600',
    },
    headerSubTitleTextRight :{
        color:'black',
        fontSize:14,
        fontWeight:'600',
    },
    
    headerBottomTitleView :{
        alignItems:'center',
        backgroundColor:'#37474f',
        borderBottomWidth:2,
        borderColor:'#e6e6e6',
        marginBottom:-7,
        marginTop:7
    },
    
    headerBottomTitleText :{
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    containerBottom:{
        flex:1,
        flexDirection:'column'
    },
    descriptionView :{
        padding:10,
    },
    descriptionText :{
        fontWeight:'800'
    },
    buttonsView:{
        backgroundColor:'#f2f2f2',
        borderBottomWidth:2,
        borderColor:'#e6e6e6',
        paddingVertical : 10,
        height:65,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    buttonsButton:{
        backgroundColor:'#ef5350',
        borderRadius :5 ,
        padding:10,
        width :'47%',
        marginLeft: '1%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonsButtonSubmit:{
        backgroundColor:'#8ACDD7',
        borderRadius :5 ,
        padding:10,
        width :'47%',
        marginLeft: '1%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    buttonsButtonText:{
        color :'white',
        fontSize:14,
        fontWeight:'800'
    },
  

})