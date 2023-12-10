import { StyleSheet, Dimensions } from "react-native"

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  productCardContainer: {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'space-between',
    margin:'3%',
    padding:'2%',
    backgroundColor:'#eceff1',
    borderRadius:5,
    borderColor:'#616161',
    borderWidth : 0.2
  },
  productCardImageContainer: {
    flex:3,
    width:'100%',
    height:height*0.20,
    borderRadius:10,
    backgroundColor:'white'

  },
  productCardImage: {
    width:'100%',
    height:height*0.20,
    borderRadius:10,
    resizeMode: 'contain',

  },
  productCardTitle: {
    flex:2,
    height: height*0.06,
    paddingHorizontal:5,
    flexWrap:'wrap',
    fontSize:18,
    color:'#800080',
    fontWeight:'800'
    
  },
  productCardPrice: {
    flex:120,
    fontSize:16.5,
    color:'#616161',
    fontWeight:'600',
    marginBottom:3
  },
  productCardStock: {
    flex:1,
    fontSize:14,
    color:'#EE4B2B',
    fontWeight:'500',
  },

  

});

export default styles