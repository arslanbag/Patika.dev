import { StyleSheet,Dimensions } from "react-native"

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    toDoListContainer: {
        flex:50,
        marginBottom:3,
        minHeight:40,
        maxHeight:70,
       

    },
    toDoListTextDo: {
        backgroundColor:'#37474f',
        padding: 10,
        borderTopLeftRadius:5,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:5,
        fontSize:16,
        fontWeight:'400',
        textDecorationLine: 'line-through',
        color:'white'
    },
    toDoListTextDont: {
        backgroundColor:'#7da453',
        padding: 10,
        borderTopLeftRadius:5,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:5,
        fontSize:16,
        fontWeight:'400',
        color:'white'
    },

});

export default styles