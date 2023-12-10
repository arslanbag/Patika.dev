import { StyleSheet, Dimensions } from "react-native"

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  searchView: {
    height: height * 0.074,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:7,
    paddingBottom:20,
    borderBottomColor:'grey',
    borderBottomWidth:0.19,
    marginBottom:7
  },
  searchInput: {
    color: '#800080',
    fontSize: 18,
    height: height * 0.054,
    fontWeight: '400',
    backgroundColor: '#eceff1',
    borderColor:'#D5D5D5',
    borderWidth: 0.5,
    marginLeft:'3%',
    width:'94%',
    borderRadius: 12,
    paddingLeft:15,
    marginTop:5
  },

});

export default styles