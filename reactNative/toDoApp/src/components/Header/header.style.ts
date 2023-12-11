import { StyleSheet ,Dimensions} from "react-native"

const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerContainer: {

        flexDirection:'row',
        padding: 10,
        borderColor:'#808080',
        borderWidth:0.5,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:3,
        backgroundColor: 'rgba(55,71,79, 0.8)',
        width:width*0.949,
        height: height*0.065
        
        
    },
    headerText: {
        flex:1,
        fontSize: 20,
        color: "#ffa500",
        fontWeight:'400',
 
    },
    headerToDoCount: {
        fontSize: 18,
        color: "#37474f",
        borderColor:'#999999',
        borderWidth:0.5,
        borderRadius:18,
        paddingLeft:8,
        paddingRight:8,
        paddingTop:2,
        backgroundColor:'#ffa500',
        textAlign:'center',
        fontWeight:'400'
    }

});

export default styles