import { StyleSheet,Dimensions } from "react-native"

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    toDoListNotFoundContainer: {
        flex:50,
        padding: 10,
        width:width*0.95,
        height: height*0.5,
        alignItems:'center',

    },
    toDoListNotFoundText: {
        textAlign:'center',
        color:'#f3f6f4',
        fontSize:16,
        fontWeight:'200'
    },

});

export default styles