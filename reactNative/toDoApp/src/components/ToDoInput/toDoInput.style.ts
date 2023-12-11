
import { StyleSheet,Dimensions } from "react-native"

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    toDoInputContainer: {
        borderColor:'#808080',
        borderWidth:0.5,
        borderBottomRightRadius:0,
        borderTopRightRadius:40,
        borderRadius:10,
        backgroundColor: 'rgba(55,71,79, 0.8)',
        justifyContent:'center',
        paddingBottom:10,
        paddingTop:10,
    },
    ToDoInputStyleInput: {
        borderBottomWidth:0.5,
        borderColor:'#808080',
        fontSize:16,
        fontWeight:'400',
        margin:10,
        color:'#f3f6f4',
        
    },
    ToDoInputStyleButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5,
        borderRadius:10,
        flexDirection:'row'
    },
    ToDoInputStyleButtonAdd: {
        width:'70%',
        height:40,
        backgroundColor:'#ffa500',
        textAlign:'center',
        marginBottom:10,
        borderBottomRightRadius:20,
        justifyContent:'center',
        marginLeft:5
        
    },
    ToDoInputStyleButtonCancel: {
        width:'20%',
        height:40,
        backgroundColor:'#808080',
        textAlign:'center',
        marginBottom:10,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        justifyContent:'center',
        
    },
    ToDoInputStyleButtonTextCancel: {
        marginTop:2,
        textAlign:'center',
        fontSize:16,
        fontWeight:'400',
        color:'#37474f'
      
    },
    ToDoInputStyleButtonTextAdd: {
        marginTop:2,
        textAlign:'center',
        fontSize:16,
        fontWeight:'800',
        color:'#37474f'
      
    }

});

export default styles